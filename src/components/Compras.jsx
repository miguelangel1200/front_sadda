import { useQuery } from "@tanstack/react-query";
import { getCompras } from "../api/ordenCompras";


function Compras() {

    const {
        isLoading,
        data : compras,
        isError,
        error
    } = useQuery({
        queryKey: ['compras'],
        queryFn: getCompras 
    })

    if (isLoading) return <div>Cargando...</div>
    else if (isError) return <div>Error: {error.message}</div>

    return compras.map(compra => (
        <div key={compra.id}>
            <h3>{compra.oc_empresa}</h3>
            <p>{compra.TIPO}</p>
            <p>{compra.descripcion}</p>
            <p>{compra.proveedor}</p>
            <p>{compra.ruc}</p>
            <p>{compra.fac}</p>
            <p>{compra.nro}</p>
            <p>{compra.fecha_emision}</p>
            <p>{compra.fecha_registro}</p>
            <p>{compra.soles}</p>
            <p>{compra.dolares}</p>
            <p>{compra.tc}</p>
            <p>{compra.total}</p>
        </div>
    ))
}

export default Compras;