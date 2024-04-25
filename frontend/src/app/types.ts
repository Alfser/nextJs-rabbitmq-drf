export type PersonInputs = {
    firstName: string
    lastName: string
    adress1: AdressInputs
    adress2: AdressInputs
    city: string
    state: string
    country: string
    email: string
}

export type AdressInputs = {
    street: string
    number: number
}