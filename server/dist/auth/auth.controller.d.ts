import { Request, Response } from 'express';
import { IUserService } from '../users/user';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: IAuthService, userService: IUserService);
    registerUser(createUserDto: CreateUserDto): Promise<Record<string, any>>;
    login(res: Response): Response<any, Record<string, any>>;
    status(req: Request, res: Response): void;
    logout(): void;
}
