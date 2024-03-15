import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

// Se `prisma` não existe em `globalThis` (ou seja, é undefined), crie um novo PrismaClient
// Caso contrário, use o `prisma` existente em `globalThis`
// Isso garante que apenas uma instância do PrismaClient seja criada
const db = globalThis.prisma || new PrismaClient();

// Se não estivermos no ambiente de produção, atribua a instância do PrismaClient a `globalThis.prisma`
// Isso é útil para desenvolvimento e testes, mas não é necessário em produção
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}

// Exporte a instância do PrismaClient para uso em outros arquivos
export default db;