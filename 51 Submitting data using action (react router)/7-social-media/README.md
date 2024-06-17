# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) htmlFor Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) htmlFor Fast Refresh

we learnt that

at main and createPost

1. Action method can be used to perform an action o submission of Forms.
2. Custom Form component need to be used along ith name attribute for all inputs
3. Action function will get an data object . To generate correct request object
   method="POST" attribute should be used.
4. Data.request.formData(). method can be used to get form data Object .
5. Oject.fromEntries(formData) can be used to get actual input data.
6. redirect() reponse can be retured for navigation after submission.
