# table-component-stencil
Componente Web en Stencil para renderizar un api Rest hacia una tabla

`MyTableComponentSasegovia1` es un componente web reutilizable desarrollado en Stencil que permite renderizar datos en una tabla HTML a partir de una API REST.

## Características

- **Carga de datos dinámicos:** Obtiene y muestra datos de una API proporcionada a través de la propiedad `apiUrl`.
- **Interfaz responsiva:** Muestra los datos en una tabla HTML con encabezados dinámicos basados en las claves del JSON recibido.
- **Manejo de errores:** Muestra mensajes de error si la solicitud falla o si los datos no son válidos.
- **Indicador de carga:** Muestra un indicador de carga mientras se obtienen los datos.


## Captura
![alt text](<img/image.png>) 
## Instalación
### Alternativa 1:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/sebgh0/table-component-stencil.git
    ```

2. Accede al directorio 
    ```bash
    cd component-01-sasegovia1
    ```

3. Instala las dependencias
    ```bash
    npm install
    ``` 
4. Inicia el servidor de desarrollo:
    ```bash
    npm start
    ```

### Alternativa 2:

1. En tu proyecto, ejecuta el comando
    ```bash
    npm i componente-01-sasegovia
    ```

## USO
- Una vez instalado y configurado, puedes utilizar tu componente en un proyecto HTML o en un framework que soporte componentes web.
    ```bash
        <my-table-component-sasegovia1 api-url="https://api.example.com/products"></my-table-component-sasegovia1>
    ```
