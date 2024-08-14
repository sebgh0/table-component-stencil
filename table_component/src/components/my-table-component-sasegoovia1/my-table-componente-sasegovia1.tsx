import { Component, Prop, State, h } from '@stencil/core';

interface DataItem {
  [key: string]: any;
}

@Component({
  tag: 'my-table-component-sasegovia1',
  styleUrl: 'my-table-component-sasegovia1.css',
  shadow: true,
})
export class MyTableComponentSasegovia1 {
    @Prop() apiUrl: string;
    @State() data: DataItem[] = [];
    @State() keys: string[] = [];
    @State() error: string = '';
    @State() isLoading: boolean = true;

    async componentWillLoad() {
        try {
        // Se hace una solicitud HTTP para obtener los datos desde la URL proporcionada      
        const response = await fetch(this.apiUrl);
        // Se verifica si la respuesta es válida 
        if (!response.ok) throw new Error('La respuesta de la red no fue correcta');
        // Se convierte la respuesta en formato JSON.
        const result = await response.json();

        if (Array.isArray(result) && result.length > 0) {
            this.keys = Object.keys(result[0]);
            this.data = result;
        } else {
            // Si no hay datos o el formato es incorrecto, se almacena un mensaje de error
            this.error = 'No se encontraron datos o el formato de los datos no es válido';
        }
        } catch (error) {
            // Si ocurre un error en la solicitud, se almacena un mensaje de error
            this.error = `No se pudieron obtener los datos: ${error.message}`;
        } finally {
        this.isLoading = false;
        }
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
                {/* Se generan las cabeceras de la tabla usando las claves del primer objeto en el array de datos */}
                {this.keys.map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
                {/* Se generan las filas y celdas de la tabla iterando sobre los datos. */}
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

    render() {
        // Si los datos aún se están cargando, se muestra un indicador de carga
        if (this.isLoading) {
        return <div class="loading">Cargando...</div>;
        }

        // Si hay un mensaje de error, se muestra el mensaje de error
        if (this.error) {
        return this.renderErrorMessage();
        }

        // Si no hay datos después de la carga, se muestra un mensaje indicando que no hay datos
        if (this.data.length === 0) {
        return <div class="no-data">No hay datos disponibles.</div>;
        }

        // Si todo está correcto, se renderiza la tabla con los datos obtenidos
        return this.renderTable();
    }
}