import { menuPral } from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'

const main = async () => {
    let n: number
    let n1: number, n2: number
    let f1: string, f2: string
    do {

        n = await menuPral()
        switch(n){
            case 1:
                console.log("Estoy en opción 1")
                await primo()
                break
            case 2:
                console.log("Estoy en opción 2")
                n1 =  parseInt( await leerTeclado('Dame un número para saber si es PAR o IMPAR'))
                if (n1 %2==0)
                    {
	                     console.log(`Es PAR`)
                    }
                else
                    {
                        console.log(`Es IMPAR`)
                    }  
                
                    break
            case 3:
                console.log("Estoy en opción 3")
                n1 =  parseInt( await leerTeclado('Dame longitud de la base (en cms)')) 
                n2 =  parseInt( await leerTeclado('Dame longitud de la altura (en cms)'))
                console.log(`La superficie del rectángulo (en cms cuadrados) es: ${superficie (n1, n2)}`)
                break
            case 4:
                console.log("Estoy en opción 4")
                f1 =  await leerTeclado('Dime la primera fecha (FECHA 1) para comparar (formato: YYYY-MM-DD)') 
                f2 =  await leerTeclado('Dime la segunda fecha (FECHA 2) para comparar (formato: YYYY-MM-DD)')                
                console.log('fecha 1 en formato ISO es:', new Date(f1).toISOString());
                console.log('fecha 2 en formato ISO es:', new Date(f2).toISOString());
                if (f1 < f2) 
                    {
                    console.log(`La FECHA 1 es anterior a la FECHA 2`)   
                }else {
                    console.log(`La FECHA 1 es posterior a la FECHA 2`)
                }
                break 
            case 0:
                break
            default:
                console.log("Opción incorrecta, introduzca solo las opciones del menú")
                break
        }
    }while (n != 0)
}
const primo = async () => {
    let n1: number
    let i: number
    n1 =  parseInt( await leerTeclado('Dame el número para comprobar si es PRIMO o no')) 
    for (i=2; i<n1; i++)
{
if (n1 % i === 0)
    {
    console.log(`FALSO, NO es primo`)
    }

else
    {
	console.log(`VERDADERO, SÍ es primo`)

    } 
break 
} 
}    

const par_impar = (n1: number): number => n1
const superficie = (n1: number, n2: number): number => n1 * n2
main()