export default class ApiResponse<T> {
    Success!: boolean;
    Message!: string;
    Data!: T;
    Errors!: Array<string>;
}