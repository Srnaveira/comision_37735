import productos from "./Data";

export const cargarProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(productos)
            }, 2000)
        })
    }
