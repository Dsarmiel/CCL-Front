export default class ApiResponse<T> {
    success!: boolean;
    message!: string;
    data!: T;
    errors!: Array<string>;
}