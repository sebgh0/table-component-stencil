import { Component, Prop, State, h } from '@stencil/core';

// Definición de la interfaz DataItem para representar un elemento de los datos
interface DataItem {
  [key: string]: any;
}

@Component({
  tag: 'my-table-component-sasegovia1',
  styleUrl: 'my-table-component-sasegovia1.css',
  shadow: true,
})
export class MyTableComponentSasegovia1 {
  // Propiedad que recibe la URL de la API desde la cual se obtendrán los datos
  @Prop() apiUrl: string;

  // Estado para almacenar los datos obtenidos de la API
  @State() data: DataItem[] = [];

  // Estado para almacenar las claves (columnas) de los datos
  @State() keys: string[] = [];

  // Estado para almacenar cualquier mensaje de error durante la carga de datos
  @State() error: string = '';

  // Estado para indicar si los datos aún se están cargando
  @State() isLoading: boolean = true;

  // Estado para almacenar la clave de ordenación activa
  @State() sortKey: string = '';

  // Estado para almacenar la dirección de ordenación ('asc' para ascendente, 'desc' para descendente)
  @State() sortDirection: 'asc' | 'desc' = 'asc';

  // Método que se ejecuta antes de que el componente se renderice por primera vez
  async componentWillLoad() {
    try {
      // Realiza una solicitud HTTP para obtener los datos desde la URL proporcionada
      const response = await fetch(this.apiUrl);

      // Verifica si la respuesta es válida
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue correcta');
      }

      // Convierte la respuesta en formato JSON
      const result = await response.json();

      // Procesa los datos obtenidos, asegurando que sean un array
      const processedData = Array.isArray(result)
        ? result
        : result.results && Array.isArray(result.results)
        ? result.results
        : [];

      // Si los datos procesados tienen contenido, se extraen las claves y se almacenan los datos
      if (processedData.length > 0) {
        this.keys = Object.keys(processedData[0]);
        this.data = processedData;
      } else {
        // Si no hay datos válidos, se establece un mensaje de error
        this.error = 'No se encontraron datos o el formato de los datos no es válido';
      }
    } catch (error) {
      // Si ocurre un error durante la solicitud, se almacena el mensaje de error
      this.error = `No se pudieron obtener los datos: ${error.message}`;
    } finally {
      // Indica que la carga de datos ha finalizado
      this.isLoading = false;
    }
  }

  // Método para ordenar los datos en función de la clave especificada
  sortData(key: string) {
    // Alterna la dirección de ordenación si la misma columna se selecciona nuevamente
    this.sortDirection = this.sortKey === key && this.sortDirection === 'asc' ? 'desc' : 'asc';
    
    // Establece la clave de ordenación activa
    this.sortKey = key;

    // Ordena los datos en función de la dirección y clave de ordenación
    this.data = [...this.data].sort((a, b) =>
      this.sortDirection === 'asc'
        ? a[key] > b[key]
          ? 1
          : -1
        : a[key] < b[key]
        ? 1
        : -1
    );
  }

  // Método que renderiza un mensaje de error si es necesario
  private renderErrorMessage() {
    return <div class="error">{this.error}</div>;
  }

  // Método que renderiza la tabla con los datos obtenidos
  private renderTable() {
    return (
      <table>
        <thead>
          <tr>
            {/* Genera las cabeceras de la tabla usando las claves del primer objeto en el array de datos */}
            {this.keys.map((key, index) => (
              <th key={index} onClick={() => this.sortData(key)}>
                {key} {/* Muestra el indicador de ordenación si esta clave está activa */}
                {this.sortKey === key ? (this.sortDirection === 'asc' ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Genera las filas y celdas de la tabla iterando sobre los datos */}
          {this.data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {this.keys.map((key, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`} data-label={key}>
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  // Método que gestiona la lógica de renderizado, dependiendo del estado actual del componente
  private renderContent() {
    if (this.isLoading) {
      // Muestra un indicador de carga si los datos aún se están cargando
      return <div class="loading">Cargando...</div>;
    }

    if (this.error) {
      // Muestra un mensaje de error si existe uno
      return this.renderErrorMessage();
    }

    if (this.data.length === 0) {
      // Muestra un mensaje si no hay datos después de la carga
      return <div class="no-data">No hay datos disponibles.</div>;
    }

    // Si todo está correcto, renderiza la tabla con los datos obtenidos
    return this.renderTable();
  }

  // Método principal de renderizado del componente
  render() {
    // Llama al método que gestiona el contenido a renderizar
    return this.renderContent();
  }
}
