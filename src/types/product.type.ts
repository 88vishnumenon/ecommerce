
export interface VProduct{
    id:number,
    title:string,
    description:string,
    image:string,
    quantityAvailable:number
}


export interface VProductState{
    products:VProduct[]
}

