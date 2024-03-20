export interface IBaseRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T>;
    create(entity: T): Promise<T>;
    update(id: number, fields: Partial<T>): Promise<T>;
    delete(id: number): Promise<T>;
}