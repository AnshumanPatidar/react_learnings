# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

in this chapter

ye sab changes apn ne addtodo me kre h usko jaakr dekhe

1. useRef hook jo h vo or optimised h useState se
   kese ?
   useState hr ek state change pr re-paint ho ta h pr useRef use kr te h toh vo hr ek change ko store krta h or final change ek baar me ho show krta h
   apn ne esa kra h ki jb submit button click ho to final value display ho jaaye
2. hr ek object me bydefalut ref method or property hoti h
   jese ki input tag me thi
3. how to use useRef
   const object/var_name = useRef();
4. useRef ek react ka object h
   import {useRef} from "react"
5. useRef allows access to DOM elements and retains mutable values without re-renders.
   Used eith the "ref" arrtibute for direct DoM interactions
   Can hold previous state or prop values
   Not limited to DOM references , can Hold any value
   Refs can be passed as Props
