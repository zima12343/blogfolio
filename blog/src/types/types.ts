export interface ICard {
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
}

export interface ICards {
    count: number,
    next: string | null,
    previous: string | null,
    results: ICard[]
}

export interface IUserLogin {
    userName: string,
    email: string,
    password: string,
    passwordConfirm: string,
}