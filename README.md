# FilePass

Una aplicación de React con inicio de sesión y función de carga de archivos mediante el sistema drag&drop de archivos.

## 🚀 Características

- **Sistema de Autenticación**
  - Autenticación
  - Rutas protegidas
  - Manejo de errores

- **Página de inicio de sesión**
  - Estados de carga
  - Información de errores
  - Responsive design

- **Dashboard**
  - Carga de archvios mediante Drag&drop
  - Notificaciones de carga con exito
  - Funcionalidad de cierre de seión

## 🛠️ Tecnologías

- React
- Regres.in
- Tailwind CSS
- React Router DOM
- React Dropzone
- React Hook Form
- Axios
- React Hot Toast
- Lucide React Icons

## 🏃‍♂️ Como comenzar

1. **Clonar el repositorio**

```bash
git clone https://github.com/Camilo-Suarez98/file-pass.git
cd file-pass
```

2. **Instalar las dependencias**

```bash
npm install
```

3. **Ejecutar el servidor de desarrollo**

```bash
npm run dev
```

## 📝 Uso

1. **Inicio de sesión**
   - Usa las siguientes credenciales:
     - Correo: eve.holt@reqres.in
     - Contraseña: Cualquier contraseña

2. **Dashboard**
   - Luego de iniciar sesión, serás redirigido a esta página
   - Prueba la funcionalidad de drag&drop
   - Soporta los siguientes archivos: PDF, DOC, DOCX, PNG, JPG

## 🔒 Autenticación

La aplicación realiza el proceso de autenticación utilizando la API de Regres.in:
- Los tokens son almacenados en localStorage
- Las rutas protegidas redirigen al login si no hay token en localStorage
- El manejo del token se realiza a través de AuthContext