import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let seleccionado: number
    console.log('\n')
    console.log('1.- ¿Es el número PRIMO?')
    console.log('2.- ¿PAR o IMPAR?')
    console.log('3.- Calcular superficie de un RECTÁNGULO')
    console.log('4.- Comparar FECHAS')
    console.log('0.- Salir')
    seleccionado = parseInt( await leerTeclado('opción ') )
    return seleccionado
}