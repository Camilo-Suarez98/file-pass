# FilePass

A React App with Login and drag&drop file upload funtion.

## 🚀 Características

- **Authentication System**
  - Authentication
  - Protected Routes
  - Erro handling

- **Login Page**
  - Load state
  - Error information
  - Responsive design

- **Dashboard**
  - Uploading files via Drag&drop
  - Successful upload notification
  - Logout funtion

## 🛠️ Tech Stack

- React
- Regres.in
- Tailwind CSS
- React Router DOM
- React Dropzone
- React Hook Form
- Axios
- React Hot Toast
- Lucide React Icons

## 🏃‍♂️ Start Running

1. **Clone the repository**

```bash
git clone https://github.com/Camilo-Suarez98/file-pass.git
cd file-pass
```

2. **Install the dependencies**

```bash
npm install
```

3. **Run the server**

```bash
npm run dev
```

## 📝 Run the code

1. **Login**
  - Use the following credentials:
    - Email: eve.holt@reqres.in
    - Password: Any password

2. **Dashboard**
  - After logging in, you will be redirected to this page
  - Try the drag&drop functionality
  - Supports the following files: PDF, DOC, DOCX, PNG, JPG

## 🔒 Authentication

The app performs the authentication process using the Regres.in API:
  - Tokens are stored in localStorage
  - Protected paths redirect to login if there is no token in localStorage
  - Token handling is done via AuthContext