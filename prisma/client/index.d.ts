
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Currency
 * 
 */
export type Currency = $Result.DefaultSelection<Prisma.$CurrencyPayload>
/**
 * Model Currencies
 * 
 */
export type Currencies = $Result.DefaultSelection<Prisma.$CurrenciesPayload>
/**
 * Model Variation
 * 
 */
export type Variation = $Result.DefaultSelection<Prisma.$VariationPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CLIENT: 'CLIENT',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tests
 * const tests = await prisma.test.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tests
   * const tests = await prisma.test.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.currency`: Exposes CRUD operations for the **Currency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currency.findMany()
    * ```
    */
  get currency(): Prisma.CurrencyDelegate<ExtArgs>;

  /**
   * `prisma.currencies`: Exposes CRUD operations for the **Currencies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currencies.findMany()
    * ```
    */
  get currencies(): Prisma.CurrenciesDelegate<ExtArgs>;

  /**
   * `prisma.variation`: Exposes CRUD operations for the **Variation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variations
    * const variations = await prisma.variation.findMany()
    * ```
    */
  get variation(): Prisma.VariationDelegate<ExtArgs>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Test: 'Test',
    User: 'User',
    Currency: 'Currency',
    Currencies: 'Currencies',
    Variation: 'Variation',
    Collection: 'Collection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "test" | "user" | "currency" | "currencies" | "variation" | "collection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Currency: {
        payload: Prisma.$CurrencyPayload<ExtArgs>
        fields: Prisma.CurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findFirst: {
            args: Prisma.CurrencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findMany: {
            args: Prisma.CurrencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          create: {
            args: Prisma.CurrencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          createMany: {
            args: Prisma.CurrencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurrencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          delete: {
            args: Prisma.CurrencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          update: {
            args: Prisma.CurrencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          deleteMany: {
            args: Prisma.CurrencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CurrencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          aggregate: {
            args: Prisma.CurrencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrency>
          }
          groupBy: {
            args: Prisma.CurrencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrencyCountArgs<ExtArgs>
            result: $Utils.Optional<CurrencyCountAggregateOutputType> | number
          }
        }
      }
      Currencies: {
        payload: Prisma.$CurrenciesPayload<ExtArgs>
        fields: Prisma.CurrenciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrenciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrenciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>
          }
          findFirst: {
            args: Prisma.CurrenciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrenciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>
          }
          findMany: {
            args: Prisma.CurrenciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>[]
          }
          create: {
            args: Prisma.CurrenciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>
          }
          createMany: {
            args: Prisma.CurrenciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurrenciesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>[]
          }
          delete: {
            args: Prisma.CurrenciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>
          }
          update: {
            args: Prisma.CurrenciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>
          }
          deleteMany: {
            args: Prisma.CurrenciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrenciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CurrenciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>
          }
          aggregate: {
            args: Prisma.CurrenciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrencies>
          }
          groupBy: {
            args: Prisma.CurrenciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrenciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrenciesCountArgs<ExtArgs>
            result: $Utils.Optional<CurrenciesCountAggregateOutputType> | number
          }
        }
      }
      Variation: {
        payload: Prisma.$VariationPayload<ExtArgs>
        fields: Prisma.VariationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>
          }
          findFirst: {
            args: Prisma.VariationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>
          }
          findMany: {
            args: Prisma.VariationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>[]
          }
          create: {
            args: Prisma.VariationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>
          }
          createMany: {
            args: Prisma.VariationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>[]
          }
          delete: {
            args: Prisma.VariationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>
          }
          update: {
            args: Prisma.VariationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>
          }
          deleteMany: {
            args: Prisma.VariationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VariationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>
          }
          aggregate: {
            args: Prisma.VariationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariation>
          }
          groupBy: {
            args: Prisma.VariationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariationCountArgs<ExtArgs>
            result: $Utils.Optional<VariationCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    collections: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | UserCountOutputTypeCountCollectionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }


  /**
   * Count Type CurrencyCountOutputType
   */

  export type CurrencyCountOutputType = {
    currencies: number
  }

  export type CurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currencies?: boolean | CurrencyCountOutputTypeCountCurrenciesArgs
  }

  // Custom InputTypes
  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyCountOutputType
     */
    select?: CurrencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountCurrenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrenciesWhereInput
  }


  /**
   * Count Type CurrenciesCountOutputType
   */

  export type CurrenciesCountOutputType = {
    variations: number
    collections: number
  }

  export type CurrenciesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variations?: boolean | CurrenciesCountOutputTypeCountVariationsArgs
    collections?: boolean | CurrenciesCountOutputTypeCountCollectionsArgs
  }

  // Custom InputTypes
  /**
   * CurrenciesCountOutputType without action
   */
  export type CurrenciesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrenciesCountOutputType
     */
    select?: CurrenciesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CurrenciesCountOutputType without action
   */
  export type CurrenciesCountOutputTypeCountVariationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariationWhereInput
  }

  /**
   * CurrenciesCountOutputType without action
   */
  export type CurrenciesCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }


  /**
   * Count Type VariationCountOutputType
   */

  export type VariationCountOutputType = {
    collections: number
  }

  export type VariationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | VariationCountOutputTypeCountCollectionsArgs
  }

  // Custom InputTypes
  /**
   * VariationCountOutputType without action
   */
  export type VariationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationCountOutputType
     */
    select?: VariationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VariationCountOutputType without action
   */
  export type VariationCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    id: number | null
  }

  export type TestSumAggregateOutputType = {
    id: number | null
  }

  export type TestMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TestMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    id?: true
  }

  export type TestSumAggregateInputType = {
    id?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: number
    name: string
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    name?: boolean
  }


  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Test model
   */ 
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'Int'>
    readonly name: FieldRef<"Test", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test createManyAndReturn
   */
  export type TestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    firstname: string | null
    secondname: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    profile: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    firstname: string | null
    secondname: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    profile: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    firstname: number
    secondname: number
    password: number
    createdAt: number
    updatedAt: number
    profile: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    firstname?: true
    secondname?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    profile?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    firstname?: true
    secondname?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    profile?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    firstname?: true
    secondname?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    profile?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    firstname: string
    secondname: string
    password: string
    createdAt: Date
    updatedAt: Date
    profile: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    firstname?: boolean
    secondname?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean
    role?: boolean
    collections?: boolean | User$collectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    firstname?: boolean
    secondname?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    firstname?: boolean
    secondname?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | User$collectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      collections: Prisma.$CollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      firstname: string
      secondname: string
      password: string
      createdAt: Date
      updatedAt: Date
      profile: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collections<T extends User$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly secondname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly profile: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.collections
   */
  export type User$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Currency
   */

  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  export type CurrencyAvgAggregateOutputType = {
    id: number | null
  }

  export type CurrencySumAggregateOutputType = {
    id: number | null
  }

  export type CurrencyMinAggregateOutputType = {
    id: number | null
    title: string | null
    bank_name: string | null
    currency: string | null
    date_issue: string | null
    image: string | null
  }

  export type CurrencyMaxAggregateOutputType = {
    id: number | null
    title: string | null
    bank_name: string | null
    currency: string | null
    date_issue: string | null
    image: string | null
  }

  export type CurrencyCountAggregateOutputType = {
    id: number
    title: number
    bank_name: number
    currency: number
    date_issue: number
    image: number
    _all: number
  }


  export type CurrencyAvgAggregateInputType = {
    id?: true
  }

  export type CurrencySumAggregateInputType = {
    id?: true
  }

  export type CurrencyMinAggregateInputType = {
    id?: true
    title?: true
    bank_name?: true
    currency?: true
    date_issue?: true
    image?: true
  }

  export type CurrencyMaxAggregateInputType = {
    id?: true
    title?: true
    bank_name?: true
    currency?: true
    date_issue?: true
    image?: true
  }

  export type CurrencyCountAggregateInputType = {
    id?: true
    title?: true
    bank_name?: true
    currency?: true
    date_issue?: true
    image?: true
    _all?: true
  }

  export type CurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currency to aggregate.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Currencies
    **/
    _count?: true | CurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyMaxAggregateInputType
  }

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>
  }




  export type CurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrencyWhereInput
    orderBy?: CurrencyOrderByWithAggregationInput | CurrencyOrderByWithAggregationInput[]
    by: CurrencyScalarFieldEnum[] | CurrencyScalarFieldEnum
    having?: CurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyCountAggregateInputType | true
    _avg?: CurrencyAvgAggregateInputType
    _sum?: CurrencySumAggregateInputType
    _min?: CurrencyMinAggregateInputType
    _max?: CurrencyMaxAggregateInputType
  }

  export type CurrencyGroupByOutputType = {
    id: number
    title: string
    bank_name: string
    currency: string
    date_issue: string
    image: string
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  type GetCurrencyGroupByPayload<T extends CurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
        }
      >
    >


  export type CurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    bank_name?: boolean
    currency?: boolean
    date_issue?: boolean
    image?: boolean
    currencies?: boolean | Currency$currenciesArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    bank_name?: boolean
    currency?: boolean
    date_issue?: boolean
    image?: boolean
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectScalar = {
    id?: boolean
    title?: boolean
    bank_name?: boolean
    currency?: boolean
    date_issue?: boolean
    image?: boolean
  }

  export type CurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currencies?: boolean | Currency$currenciesArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CurrencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Currency"
    objects: {
      currencies: Prisma.$CurrenciesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      bank_name: string
      currency: string
      date_issue: string
      image: string
    }, ExtArgs["result"]["currency"]>
    composites: {}
  }

  type CurrencyGetPayload<S extends boolean | null | undefined | CurrencyDefaultArgs> = $Result.GetResult<Prisma.$CurrencyPayload, S>

  type CurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CurrencyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CurrencyCountAggregateInputType | true
    }

  export interface CurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Currency'], meta: { name: 'Currency' } }
    /**
     * Find zero or one Currency that matches the filter.
     * @param {CurrencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrencyFindUniqueArgs>(args: SelectSubset<T, CurrencyFindUniqueArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Currency that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CurrencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrencyFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrencyFindFirstArgs>(args?: SelectSubset<T, CurrencyFindFirstArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Currency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrencyFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currencyWithIdOnly = await prisma.currency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurrencyFindManyArgs>(args?: SelectSubset<T, CurrencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Currency.
     * @param {CurrencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     * 
     */
    create<T extends CurrencyCreateArgs>(args: SelectSubset<T, CurrencyCreateArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Currencies.
     * @param {CurrencyCreateManyArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrencyCreateManyArgs>(args?: SelectSubset<T, CurrencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Currencies and returns the data saved in the database.
     * @param {CurrencyCreateManyAndReturnArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Currencies and only return the `id`
     * const currencyWithIdOnly = await prisma.currency.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurrencyCreateManyAndReturnArgs>(args?: SelectSubset<T, CurrencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Currency.
     * @param {CurrencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     * 
     */
    delete<T extends CurrencyDeleteArgs>(args: SelectSubset<T, CurrencyDeleteArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Currency.
     * @param {CurrencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrencyUpdateArgs>(args: SelectSubset<T, CurrencyUpdateArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Currencies.
     * @param {CurrencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrencyDeleteManyArgs>(args?: SelectSubset<T, CurrencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrencyUpdateManyArgs>(args: SelectSubset<T, CurrencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Currency.
     * @param {CurrencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
     */
    upsert<T extends CurrencyUpsertArgs>(args: SelectSubset<T, CurrencyUpsertArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends CurrencyCountArgs>(
      args?: Subset<T, CurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurrencyAggregateArgs>(args: Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Currency model
   */
  readonly fields: CurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    currencies<T extends Currency$currenciesArgs<ExtArgs> = {}>(args?: Subset<T, Currency$currenciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Currency model
   */ 
  interface CurrencyFieldRefs {
    readonly id: FieldRef<"Currency", 'Int'>
    readonly title: FieldRef<"Currency", 'String'>
    readonly bank_name: FieldRef<"Currency", 'String'>
    readonly currency: FieldRef<"Currency", 'String'>
    readonly date_issue: FieldRef<"Currency", 'String'>
    readonly image: FieldRef<"Currency", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Currency findUnique
   */
  export type CurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency findUniqueOrThrow
   */
  export type CurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency findFirst
   */
  export type CurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency findFirstOrThrow
   */
  export type CurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency findMany
   */
  export type CurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency create
   */
  export type CurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Currency.
     */
    data: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
  }

  /**
   * Currency createMany
   */
  export type CurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currency createManyAndReturn
   */
  export type CurrencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currency update
   */
  export type CurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Currency.
     */
    data: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
    /**
     * Choose, which Currency to update.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency updateMany
   */
  export type CurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
  }

  /**
   * Currency upsert
   */
  export type CurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Currency to update in case it exists.
     */
    where: CurrencyWhereUniqueInput
    /**
     * In case the Currency found by the `where` argument doesn't exist, create a new Currency with this data.
     */
    create: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
    /**
     * In case the Currency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
  }

  /**
   * Currency delete
   */
  export type CurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter which Currency to delete.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency deleteMany
   */
  export type CurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to delete
     */
    where?: CurrencyWhereInput
  }

  /**
   * Currency.currencies
   */
  export type Currency$currenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrenciesInclude<ExtArgs> | null
    where?: CurrenciesWhereInput
    orderBy?: CurrenciesOrderByWithRelationInput | CurrenciesOrderByWithRelationInput[]
    cursor?: CurrenciesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurrenciesScalarFieldEnum | CurrenciesScalarFieldEnum[]
  }

  /**
   * Currency without action
   */
  export type CurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
  }


  /**
   * Model Currencies
   */

  export type AggregateCurrencies = {
    _count: CurrenciesCountAggregateOutputType | null
    _avg: CurrenciesAvgAggregateOutputType | null
    _sum: CurrenciesSumAggregateOutputType | null
    _min: CurrenciesMinAggregateOutputType | null
    _max: CurrenciesMaxAggregateOutputType | null
  }

  export type CurrenciesAvgAggregateOutputType = {
    id: number | null
    currencyId: number | null
  }

  export type CurrenciesSumAggregateOutputType = {
    id: number | null
    currencyId: number | null
  }

  export type CurrenciesMinAggregateOutputType = {
    id: number | null
    ref: string | null
    title: string | null
    imagefront: string | null
    imageback: string | null
    description: string | null
    imagesignature: string | null
    nom_des_signataire: string | null
    currencyId: number | null
    value: string | null
    issued_by: string | null
    comments: string | null
    date: string | null
    type: string | null
  }

  export type CurrenciesMaxAggregateOutputType = {
    id: number | null
    ref: string | null
    title: string | null
    imagefront: string | null
    imageback: string | null
    description: string | null
    imagesignature: string | null
    nom_des_signataire: string | null
    currencyId: number | null
    value: string | null
    issued_by: string | null
    comments: string | null
    date: string | null
    type: string | null
  }

  export type CurrenciesCountAggregateOutputType = {
    id: number
    ref: number
    title: number
    imagefront: number
    imageback: number
    description: number
    imagesignature: number
    nom_des_signataire: number
    currencyId: number
    value: number
    issued_by: number
    comments: number
    date: number
    type: number
    _all: number
  }


  export type CurrenciesAvgAggregateInputType = {
    id?: true
    currencyId?: true
  }

  export type CurrenciesSumAggregateInputType = {
    id?: true
    currencyId?: true
  }

  export type CurrenciesMinAggregateInputType = {
    id?: true
    ref?: true
    title?: true
    imagefront?: true
    imageback?: true
    description?: true
    imagesignature?: true
    nom_des_signataire?: true
    currencyId?: true
    value?: true
    issued_by?: true
    comments?: true
    date?: true
    type?: true
  }

  export type CurrenciesMaxAggregateInputType = {
    id?: true
    ref?: true
    title?: true
    imagefront?: true
    imageback?: true
    description?: true
    imagesignature?: true
    nom_des_signataire?: true
    currencyId?: true
    value?: true
    issued_by?: true
    comments?: true
    date?: true
    type?: true
  }

  export type CurrenciesCountAggregateInputType = {
    id?: true
    ref?: true
    title?: true
    imagefront?: true
    imageback?: true
    description?: true
    imagesignature?: true
    nom_des_signataire?: true
    currencyId?: true
    value?: true
    issued_by?: true
    comments?: true
    date?: true
    type?: true
    _all?: true
  }

  export type CurrenciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to aggregate.
     */
    where?: CurrenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrenciesOrderByWithRelationInput | CurrenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Currencies
    **/
    _count?: true | CurrenciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrenciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrenciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrenciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrenciesMaxAggregateInputType
  }

  export type GetCurrenciesAggregateType<T extends CurrenciesAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrencies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrencies[P]>
      : GetScalarType<T[P], AggregateCurrencies[P]>
  }




  export type CurrenciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrenciesWhereInput
    orderBy?: CurrenciesOrderByWithAggregationInput | CurrenciesOrderByWithAggregationInput[]
    by: CurrenciesScalarFieldEnum[] | CurrenciesScalarFieldEnum
    having?: CurrenciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrenciesCountAggregateInputType | true
    _avg?: CurrenciesAvgAggregateInputType
    _sum?: CurrenciesSumAggregateInputType
    _min?: CurrenciesMinAggregateInputType
    _max?: CurrenciesMaxAggregateInputType
  }

  export type CurrenciesGroupByOutputType = {
    id: number
    ref: string
    title: string
    imagefront: string
    imageback: string
    description: string
    imagesignature: string | null
    nom_des_signataire: string
    currencyId: number
    value: string
    issued_by: string
    comments: string
    date: string | null
    type: string | null
    _count: CurrenciesCountAggregateOutputType | null
    _avg: CurrenciesAvgAggregateOutputType | null
    _sum: CurrenciesSumAggregateOutputType | null
    _min: CurrenciesMinAggregateOutputType | null
    _max: CurrenciesMaxAggregateOutputType | null
  }

  type GetCurrenciesGroupByPayload<T extends CurrenciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrenciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrenciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrenciesGroupByOutputType[P]>
            : GetScalarType<T[P], CurrenciesGroupByOutputType[P]>
        }
      >
    >


  export type CurrenciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ref?: boolean
    title?: boolean
    imagefront?: boolean
    imageback?: boolean
    description?: boolean
    imagesignature?: boolean
    nom_des_signataire?: boolean
    currencyId?: boolean
    value?: boolean
    issued_by?: boolean
    comments?: boolean
    date?: boolean
    type?: boolean
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    variations?: boolean | Currencies$variationsArgs<ExtArgs>
    collections?: boolean | Currencies$collectionsArgs<ExtArgs>
    _count?: boolean | CurrenciesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currencies"]>

  export type CurrenciesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ref?: boolean
    title?: boolean
    imagefront?: boolean
    imageback?: boolean
    description?: boolean
    imagesignature?: boolean
    nom_des_signataire?: boolean
    currencyId?: boolean
    value?: boolean
    issued_by?: boolean
    comments?: boolean
    date?: boolean
    type?: boolean
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currencies"]>

  export type CurrenciesSelectScalar = {
    id?: boolean
    ref?: boolean
    title?: boolean
    imagefront?: boolean
    imageback?: boolean
    description?: boolean
    imagesignature?: boolean
    nom_des_signataire?: boolean
    currencyId?: boolean
    value?: boolean
    issued_by?: boolean
    comments?: boolean
    date?: boolean
    type?: boolean
  }

  export type CurrenciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    variations?: boolean | Currencies$variationsArgs<ExtArgs>
    collections?: boolean | Currencies$collectionsArgs<ExtArgs>
    _count?: boolean | CurrenciesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CurrenciesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }

  export type $CurrenciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Currencies"
    objects: {
      currency: Prisma.$CurrencyPayload<ExtArgs>
      variations: Prisma.$VariationPayload<ExtArgs>[]
      collections: Prisma.$CollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ref: string
      title: string
      imagefront: string
      imageback: string
      description: string
      imagesignature: string | null
      nom_des_signataire: string
      currencyId: number
      value: string
      issued_by: string
      comments: string
      date: string | null
      type: string | null
    }, ExtArgs["result"]["currencies"]>
    composites: {}
  }

  type CurrenciesGetPayload<S extends boolean | null | undefined | CurrenciesDefaultArgs> = $Result.GetResult<Prisma.$CurrenciesPayload, S>

  type CurrenciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CurrenciesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CurrenciesCountAggregateInputType | true
    }

  export interface CurrenciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Currencies'], meta: { name: 'Currencies' } }
    /**
     * Find zero or one Currencies that matches the filter.
     * @param {CurrenciesFindUniqueArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrenciesFindUniqueArgs>(args: SelectSubset<T, CurrenciesFindUniqueArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Currencies that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CurrenciesFindUniqueOrThrowArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrenciesFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrenciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesFindFirstArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrenciesFindFirstArgs>(args?: SelectSubset<T, CurrenciesFindFirstArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Currencies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesFindFirstOrThrowArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrenciesFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrenciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currencies.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currencies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currenciesWithIdOnly = await prisma.currencies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurrenciesFindManyArgs>(args?: SelectSubset<T, CurrenciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Currencies.
     * @param {CurrenciesCreateArgs} args - Arguments to create a Currencies.
     * @example
     * // Create one Currencies
     * const Currencies = await prisma.currencies.create({
     *   data: {
     *     // ... data to create a Currencies
     *   }
     * })
     * 
     */
    create<T extends CurrenciesCreateArgs>(args: SelectSubset<T, CurrenciesCreateArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Currencies.
     * @param {CurrenciesCreateManyArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currencies = await prisma.currencies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrenciesCreateManyArgs>(args?: SelectSubset<T, CurrenciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Currencies and returns the data saved in the database.
     * @param {CurrenciesCreateManyAndReturnArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currencies = await prisma.currencies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Currencies and only return the `id`
     * const currenciesWithIdOnly = await prisma.currencies.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurrenciesCreateManyAndReturnArgs>(args?: SelectSubset<T, CurrenciesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Currencies.
     * @param {CurrenciesDeleteArgs} args - Arguments to delete one Currencies.
     * @example
     * // Delete one Currencies
     * const Currencies = await prisma.currencies.delete({
     *   where: {
     *     // ... filter to delete one Currencies
     *   }
     * })
     * 
     */
    delete<T extends CurrenciesDeleteArgs>(args: SelectSubset<T, CurrenciesDeleteArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Currencies.
     * @param {CurrenciesUpdateArgs} args - Arguments to update one Currencies.
     * @example
     * // Update one Currencies
     * const currencies = await prisma.currencies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrenciesUpdateArgs>(args: SelectSubset<T, CurrenciesUpdateArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Currencies.
     * @param {CurrenciesDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currencies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrenciesDeleteManyArgs>(args?: SelectSubset<T, CurrenciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currencies = await prisma.currencies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrenciesUpdateManyArgs>(args: SelectSubset<T, CurrenciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Currencies.
     * @param {CurrenciesUpsertArgs} args - Arguments to update or create a Currencies.
     * @example
     * // Update or create a Currencies
     * const currencies = await prisma.currencies.upsert({
     *   create: {
     *     // ... data to create a Currencies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currencies we want to update
     *   }
     * })
     */
    upsert<T extends CurrenciesUpsertArgs>(args: SelectSubset<T, CurrenciesUpsertArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currencies.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends CurrenciesCountArgs>(
      args?: Subset<T, CurrenciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrenciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurrenciesAggregateArgs>(args: Subset<T, CurrenciesAggregateArgs>): Prisma.PrismaPromise<GetCurrenciesAggregateType<T>>

    /**
     * Group by Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurrenciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrenciesGroupByArgs['orderBy'] }
        : { orderBy?: CurrenciesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurrenciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrenciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Currencies model
   */
  readonly fields: CurrenciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Currencies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrenciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    currency<T extends CurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurrencyDefaultArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    variations<T extends Currencies$variationsArgs<ExtArgs> = {}>(args?: Subset<T, Currencies$variationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "findMany"> | Null>
    collections<T extends Currencies$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, Currencies$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Currencies model
   */ 
  interface CurrenciesFieldRefs {
    readonly id: FieldRef<"Currencies", 'Int'>
    readonly ref: FieldRef<"Currencies", 'String'>
    readonly title: FieldRef<"Currencies", 'String'>
    readonly imagefront: FieldRef<"Currencies", 'String'>
    readonly imageback: FieldRef<"Currencies", 'String'>
    readonly description: FieldRef<"Currencies", 'String'>
    readonly imagesignature: FieldRef<"Currencies", 'String'>
    readonly nom_des_signataire: FieldRef<"Currencies", 'String'>
    readonly currencyId: FieldRef<"Currencies", 'Int'>
    readonly value: FieldRef<"Currencies", 'String'>
    readonly issued_by: FieldRef<"Currencies", 'String'>
    readonly comments: FieldRef<"Currencies", 'String'>
    readonly date: FieldRef<"Currencies", 'String'>
    readonly type: FieldRef<"Currencies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Currencies findUnique
   */
  export type CurrenciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrenciesInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where: CurrenciesWhereUniqueInput
  }

  /**
   * Currencies findUniqueOrThrow
   */
  export type CurrenciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrenciesInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where: CurrenciesWhereUniqueInput
  }

  /**
   * Currencies findFirst
   */
  export type CurrenciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrenciesInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrenciesOrderByWithRelationInput | CurrenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrenciesScalarFieldEnum | CurrenciesScalarFieldEnum[]
  }

  /**
   * Currencies findFirstOrThrow
   */
  export type CurrenciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrenciesInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrenciesOrderByWithRelationInput | CurrenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrenciesScalarFieldEnum | CurrenciesScalarFieldEnum[]
  }

  /**
   * Currencies findMany
   */
  export type CurrenciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrenciesInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrenciesOrderByWithRelationInput | CurrenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Currencies.
     */
    cursor?: CurrenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    distinct?: CurrenciesScalarFieldEnum | CurrenciesScalarFieldEnum[]
  }

  /**
   * Currencies create
   */
  export type CurrenciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrenciesInclude<ExtArgs> | null
    /**
     * The data needed to create a Currencies.
     */
    data: XOR<CurrenciesCreateInput, CurrenciesUncheckedCreateInput>
  }

  /**
   * Currencies createMany
   */
  export type CurrenciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Currencies.
     */
    data: CurrenciesCreateManyInput | CurrenciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currencies createManyAndReturn
   */
  export type CurrenciesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Currencies.
     */
    data: CurrenciesCreateManyInput | CurrenciesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrenciesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Currencies update
   */
  export type CurrenciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrenciesInclude<ExtArgs> | null
    /**
     * The data needed to update a Currencies.
     */
    data: XOR<CurrenciesUpdateInput, CurrenciesUncheckedUpdateInput>
    /**
     * Choose, which Currencies to update.
     */
    where: CurrenciesWhereUniqueInput
  }

  /**
   * Currencies updateMany
   */
  export type CurrenciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrenciesUpdateManyMutationInput, CurrenciesUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrenciesWhereInput
  }

  /**
   * Currencies upsert
   */
  export type CurrenciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrenciesInclude<ExtArgs> | null
    /**
     * The filter to search for the Currencies to update in case it exists.
     */
    where: CurrenciesWhereUniqueInput
    /**
     * In case the Currencies found by the `where` argument doesn't exist, create a new Currencies with this data.
     */
    create: XOR<CurrenciesCreateInput, CurrenciesUncheckedCreateInput>
    /**
     * In case the Currencies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrenciesUpdateInput, CurrenciesUncheckedUpdateInput>
  }

  /**
   * Currencies delete
   */
  export type CurrenciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrenciesInclude<ExtArgs> | null
    /**
     * Filter which Currencies to delete.
     */
    where: CurrenciesWhereUniqueInput
  }

  /**
   * Currencies deleteMany
   */
  export type CurrenciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to delete
     */
    where?: CurrenciesWhereInput
  }

  /**
   * Currencies.variations
   */
  export type Currencies$variationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    where?: VariationWhereInput
    orderBy?: VariationOrderByWithRelationInput | VariationOrderByWithRelationInput[]
    cursor?: VariationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariationScalarFieldEnum | VariationScalarFieldEnum[]
  }

  /**
   * Currencies.collections
   */
  export type Currencies$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Currencies without action
   */
  export type CurrenciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrenciesInclude<ExtArgs> | null
  }


  /**
   * Model Variation
   */

  export type AggregateVariation = {
    _count: VariationCountAggregateOutputType | null
    _avg: VariationAvgAggregateOutputType | null
    _sum: VariationSumAggregateOutputType | null
    _min: VariationMinAggregateOutputType | null
    _max: VariationMaxAggregateOutputType | null
  }

  export type VariationAvgAggregateOutputType = {
    id: number | null
    currenciesId: number | null
  }

  export type VariationSumAggregateOutputType = {
    id: number | null
    currenciesId: number | null
  }

  export type VariationMinAggregateOutputType = {
    id: number | null
    ref: string | null
    imagefront: string | null
    imageback: string | null
    description: string | null
    imagesignature: string | null
    nom_des_signataire: string | null
    currenciesId: number | null
    issued_by: string | null
    comments: string | null
    date: string | null
    type: string | null
  }

  export type VariationMaxAggregateOutputType = {
    id: number | null
    ref: string | null
    imagefront: string | null
    imageback: string | null
    description: string | null
    imagesignature: string | null
    nom_des_signataire: string | null
    currenciesId: number | null
    issued_by: string | null
    comments: string | null
    date: string | null
    type: string | null
  }

  export type VariationCountAggregateOutputType = {
    id: number
    ref: number
    imagefront: number
    imageback: number
    description: number
    imagesignature: number
    nom_des_signataire: number
    currenciesId: number
    issued_by: number
    comments: number
    date: number
    type: number
    _all: number
  }


  export type VariationAvgAggregateInputType = {
    id?: true
    currenciesId?: true
  }

  export type VariationSumAggregateInputType = {
    id?: true
    currenciesId?: true
  }

  export type VariationMinAggregateInputType = {
    id?: true
    ref?: true
    imagefront?: true
    imageback?: true
    description?: true
    imagesignature?: true
    nom_des_signataire?: true
    currenciesId?: true
    issued_by?: true
    comments?: true
    date?: true
    type?: true
  }

  export type VariationMaxAggregateInputType = {
    id?: true
    ref?: true
    imagefront?: true
    imageback?: true
    description?: true
    imagesignature?: true
    nom_des_signataire?: true
    currenciesId?: true
    issued_by?: true
    comments?: true
    date?: true
    type?: true
  }

  export type VariationCountAggregateInputType = {
    id?: true
    ref?: true
    imagefront?: true
    imageback?: true
    description?: true
    imagesignature?: true
    nom_des_signataire?: true
    currenciesId?: true
    issued_by?: true
    comments?: true
    date?: true
    type?: true
    _all?: true
  }

  export type VariationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variation to aggregate.
     */
    where?: VariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationOrderByWithRelationInput | VariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variations
    **/
    _count?: true | VariationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariationMaxAggregateInputType
  }

  export type GetVariationAggregateType<T extends VariationAggregateArgs> = {
        [P in keyof T & keyof AggregateVariation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariation[P]>
      : GetScalarType<T[P], AggregateVariation[P]>
  }




  export type VariationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariationWhereInput
    orderBy?: VariationOrderByWithAggregationInput | VariationOrderByWithAggregationInput[]
    by: VariationScalarFieldEnum[] | VariationScalarFieldEnum
    having?: VariationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariationCountAggregateInputType | true
    _avg?: VariationAvgAggregateInputType
    _sum?: VariationSumAggregateInputType
    _min?: VariationMinAggregateInputType
    _max?: VariationMaxAggregateInputType
  }

  export type VariationGroupByOutputType = {
    id: number
    ref: string
    imagefront: string
    imageback: string
    description: string
    imagesignature: string | null
    nom_des_signataire: string
    currenciesId: number
    issued_by: string
    comments: string
    date: string | null
    type: string | null
    _count: VariationCountAggregateOutputType | null
    _avg: VariationAvgAggregateOutputType | null
    _sum: VariationSumAggregateOutputType | null
    _min: VariationMinAggregateOutputType | null
    _max: VariationMaxAggregateOutputType | null
  }

  type GetVariationGroupByPayload<T extends VariationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariationGroupByOutputType[P]>
            : GetScalarType<T[P], VariationGroupByOutputType[P]>
        }
      >
    >


  export type VariationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ref?: boolean
    imagefront?: boolean
    imageback?: boolean
    description?: boolean
    imagesignature?: boolean
    nom_des_signataire?: boolean
    currenciesId?: boolean
    issued_by?: boolean
    comments?: boolean
    date?: boolean
    type?: boolean
    currencies?: boolean | CurrenciesDefaultArgs<ExtArgs>
    collections?: boolean | Variation$collectionsArgs<ExtArgs>
    _count?: boolean | VariationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variation"]>

  export type VariationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ref?: boolean
    imagefront?: boolean
    imageback?: boolean
    description?: boolean
    imagesignature?: boolean
    nom_des_signataire?: boolean
    currenciesId?: boolean
    issued_by?: boolean
    comments?: boolean
    date?: boolean
    type?: boolean
    currencies?: boolean | CurrenciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variation"]>

  export type VariationSelectScalar = {
    id?: boolean
    ref?: boolean
    imagefront?: boolean
    imageback?: boolean
    description?: boolean
    imagesignature?: boolean
    nom_des_signataire?: boolean
    currenciesId?: boolean
    issued_by?: boolean
    comments?: boolean
    date?: boolean
    type?: boolean
  }

  export type VariationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currencies?: boolean | CurrenciesDefaultArgs<ExtArgs>
    collections?: boolean | Variation$collectionsArgs<ExtArgs>
    _count?: boolean | VariationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VariationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currencies?: boolean | CurrenciesDefaultArgs<ExtArgs>
  }

  export type $VariationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variation"
    objects: {
      currencies: Prisma.$CurrenciesPayload<ExtArgs>
      collections: Prisma.$CollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ref: string
      imagefront: string
      imageback: string
      description: string
      imagesignature: string | null
      nom_des_signataire: string
      currenciesId: number
      issued_by: string
      comments: string
      date: string | null
      type: string | null
    }, ExtArgs["result"]["variation"]>
    composites: {}
  }

  type VariationGetPayload<S extends boolean | null | undefined | VariationDefaultArgs> = $Result.GetResult<Prisma.$VariationPayload, S>

  type VariationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VariationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VariationCountAggregateInputType | true
    }

  export interface VariationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variation'], meta: { name: 'Variation' } }
    /**
     * Find zero or one Variation that matches the filter.
     * @param {VariationFindUniqueArgs} args - Arguments to find a Variation
     * @example
     * // Get one Variation
     * const variation = await prisma.variation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariationFindUniqueArgs>(args: SelectSubset<T, VariationFindUniqueArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Variation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VariationFindUniqueOrThrowArgs} args - Arguments to find a Variation
     * @example
     * // Get one Variation
     * const variation = await prisma.variation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariationFindUniqueOrThrowArgs>(args: SelectSubset<T, VariationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Variation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationFindFirstArgs} args - Arguments to find a Variation
     * @example
     * // Get one Variation
     * const variation = await prisma.variation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariationFindFirstArgs>(args?: SelectSubset<T, VariationFindFirstArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Variation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationFindFirstOrThrowArgs} args - Arguments to find a Variation
     * @example
     * // Get one Variation
     * const variation = await prisma.variation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariationFindFirstOrThrowArgs>(args?: SelectSubset<T, VariationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Variations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variations
     * const variations = await prisma.variation.findMany()
     * 
     * // Get first 10 Variations
     * const variations = await prisma.variation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variationWithIdOnly = await prisma.variation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariationFindManyArgs>(args?: SelectSubset<T, VariationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Variation.
     * @param {VariationCreateArgs} args - Arguments to create a Variation.
     * @example
     * // Create one Variation
     * const Variation = await prisma.variation.create({
     *   data: {
     *     // ... data to create a Variation
     *   }
     * })
     * 
     */
    create<T extends VariationCreateArgs>(args: SelectSubset<T, VariationCreateArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Variations.
     * @param {VariationCreateManyArgs} args - Arguments to create many Variations.
     * @example
     * // Create many Variations
     * const variation = await prisma.variation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariationCreateManyArgs>(args?: SelectSubset<T, VariationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variations and returns the data saved in the database.
     * @param {VariationCreateManyAndReturnArgs} args - Arguments to create many Variations.
     * @example
     * // Create many Variations
     * const variation = await prisma.variation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variations and only return the `id`
     * const variationWithIdOnly = await prisma.variation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariationCreateManyAndReturnArgs>(args?: SelectSubset<T, VariationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Variation.
     * @param {VariationDeleteArgs} args - Arguments to delete one Variation.
     * @example
     * // Delete one Variation
     * const Variation = await prisma.variation.delete({
     *   where: {
     *     // ... filter to delete one Variation
     *   }
     * })
     * 
     */
    delete<T extends VariationDeleteArgs>(args: SelectSubset<T, VariationDeleteArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Variation.
     * @param {VariationUpdateArgs} args - Arguments to update one Variation.
     * @example
     * // Update one Variation
     * const variation = await prisma.variation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariationUpdateArgs>(args: SelectSubset<T, VariationUpdateArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Variations.
     * @param {VariationDeleteManyArgs} args - Arguments to filter Variations to delete.
     * @example
     * // Delete a few Variations
     * const { count } = await prisma.variation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariationDeleteManyArgs>(args?: SelectSubset<T, VariationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variations
     * const variation = await prisma.variation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariationUpdateManyArgs>(args: SelectSubset<T, VariationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Variation.
     * @param {VariationUpsertArgs} args - Arguments to update or create a Variation.
     * @example
     * // Update or create a Variation
     * const variation = await prisma.variation.upsert({
     *   create: {
     *     // ... data to create a Variation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variation we want to update
     *   }
     * })
     */
    upsert<T extends VariationUpsertArgs>(args: SelectSubset<T, VariationUpsertArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationCountArgs} args - Arguments to filter Variations to count.
     * @example
     * // Count the number of Variations
     * const count = await prisma.variation.count({
     *   where: {
     *     // ... the filter for the Variations we want to count
     *   }
     * })
    **/
    count<T extends VariationCountArgs>(
      args?: Subset<T, VariationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariationAggregateArgs>(args: Subset<T, VariationAggregateArgs>): Prisma.PrismaPromise<GetVariationAggregateType<T>>

    /**
     * Group by Variation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VariationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariationGroupByArgs['orderBy'] }
        : { orderBy?: VariationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VariationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variation model
   */
  readonly fields: VariationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    currencies<T extends CurrenciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurrenciesDefaultArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    collections<T extends Variation$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, Variation$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Variation model
   */ 
  interface VariationFieldRefs {
    readonly id: FieldRef<"Variation", 'Int'>
    readonly ref: FieldRef<"Variation", 'String'>
    readonly imagefront: FieldRef<"Variation", 'String'>
    readonly imageback: FieldRef<"Variation", 'String'>
    readonly description: FieldRef<"Variation", 'String'>
    readonly imagesignature: FieldRef<"Variation", 'String'>
    readonly nom_des_signataire: FieldRef<"Variation", 'String'>
    readonly currenciesId: FieldRef<"Variation", 'Int'>
    readonly issued_by: FieldRef<"Variation", 'String'>
    readonly comments: FieldRef<"Variation", 'String'>
    readonly date: FieldRef<"Variation", 'String'>
    readonly type: FieldRef<"Variation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Variation findUnique
   */
  export type VariationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * Filter, which Variation to fetch.
     */
    where: VariationWhereUniqueInput
  }

  /**
   * Variation findUniqueOrThrow
   */
  export type VariationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * Filter, which Variation to fetch.
     */
    where: VariationWhereUniqueInput
  }

  /**
   * Variation findFirst
   */
  export type VariationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * Filter, which Variation to fetch.
     */
    where?: VariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationOrderByWithRelationInput | VariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variations.
     */
    cursor?: VariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variations.
     */
    distinct?: VariationScalarFieldEnum | VariationScalarFieldEnum[]
  }

  /**
   * Variation findFirstOrThrow
   */
  export type VariationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * Filter, which Variation to fetch.
     */
    where?: VariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationOrderByWithRelationInput | VariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variations.
     */
    cursor?: VariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variations.
     */
    distinct?: VariationScalarFieldEnum | VariationScalarFieldEnum[]
  }

  /**
   * Variation findMany
   */
  export type VariationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * Filter, which Variations to fetch.
     */
    where?: VariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationOrderByWithRelationInput | VariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variations.
     */
    cursor?: VariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    distinct?: VariationScalarFieldEnum | VariationScalarFieldEnum[]
  }

  /**
   * Variation create
   */
  export type VariationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * The data needed to create a Variation.
     */
    data: XOR<VariationCreateInput, VariationUncheckedCreateInput>
  }

  /**
   * Variation createMany
   */
  export type VariationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variations.
     */
    data: VariationCreateManyInput | VariationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Variation createManyAndReturn
   */
  export type VariationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Variations.
     */
    data: VariationCreateManyInput | VariationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variation update
   */
  export type VariationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * The data needed to update a Variation.
     */
    data: XOR<VariationUpdateInput, VariationUncheckedUpdateInput>
    /**
     * Choose, which Variation to update.
     */
    where: VariationWhereUniqueInput
  }

  /**
   * Variation updateMany
   */
  export type VariationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variations.
     */
    data: XOR<VariationUpdateManyMutationInput, VariationUncheckedUpdateManyInput>
    /**
     * Filter which Variations to update
     */
    where?: VariationWhereInput
  }

  /**
   * Variation upsert
   */
  export type VariationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * The filter to search for the Variation to update in case it exists.
     */
    where: VariationWhereUniqueInput
    /**
     * In case the Variation found by the `where` argument doesn't exist, create a new Variation with this data.
     */
    create: XOR<VariationCreateInput, VariationUncheckedCreateInput>
    /**
     * In case the Variation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariationUpdateInput, VariationUncheckedUpdateInput>
  }

  /**
   * Variation delete
   */
  export type VariationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * Filter which Variation to delete.
     */
    where: VariationWhereUniqueInput
  }

  /**
   * Variation deleteMany
   */
  export type VariationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variations to delete
     */
    where?: VariationWhereInput
  }

  /**
   * Variation.collections
   */
  export type Variation$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Variation without action
   */
  export type VariationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    currencyId: number | null
    variationId: number | null
    idCategory: number | null
  }

  export type CollectionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    currencyId: number | null
    variationId: number | null
    idCategory: number | null
  }

  export type CollectionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    currencyId: number | null
    variationId: number | null
    idCategory: number | null
    dateAdded: Date | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    currencyId: number | null
    variationId: number | null
    idCategory: number | null
    dateAdded: Date | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    userId: number
    currencyId: number
    variationId: number
    idCategory: number
    dateAdded: number
    _all: number
  }


  export type CollectionAvgAggregateInputType = {
    id?: true
    userId?: true
    currencyId?: true
    variationId?: true
    idCategory?: true
  }

  export type CollectionSumAggregateInputType = {
    id?: true
    userId?: true
    currencyId?: true
    variationId?: true
    idCategory?: true
  }

  export type CollectionMinAggregateInputType = {
    id?: true
    userId?: true
    currencyId?: true
    variationId?: true
    idCategory?: true
    dateAdded?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    userId?: true
    currencyId?: true
    variationId?: true
    idCategory?: true
    dateAdded?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    userId?: true
    currencyId?: true
    variationId?: true
    idCategory?: true
    dateAdded?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _avg?: CollectionAvgAggregateInputType
    _sum?: CollectionSumAggregateInputType
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: number
    userId: number
    currencyId: number | null
    variationId: number | null
    idCategory: number | null
    dateAdded: Date
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currencyId?: boolean
    variationId?: boolean
    idCategory?: boolean
    dateAdded?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | Collection$currencyArgs<ExtArgs>
    variation?: boolean | Collection$variationArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currencyId?: boolean
    variationId?: boolean
    idCategory?: boolean
    dateAdded?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | Collection$currencyArgs<ExtArgs>
    variation?: boolean | Collection$variationArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectScalar = {
    id?: boolean
    userId?: boolean
    currencyId?: boolean
    variationId?: boolean
    idCategory?: boolean
    dateAdded?: boolean
  }

  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | Collection$currencyArgs<ExtArgs>
    variation?: boolean | Collection$variationArgs<ExtArgs>
  }
  export type CollectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | Collection$currencyArgs<ExtArgs>
    variation?: boolean | Collection$variationArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      currency: Prisma.$CurrenciesPayload<ExtArgs> | null
      variation: Prisma.$VariationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      currencyId: number | null
      variationId: number | null
      idCategory: number | null
      dateAdded: Date
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collections and returns the data saved in the database.
     * @param {CollectionCreateManyAndReturnArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    currency<T extends Collection$currencyArgs<ExtArgs> = {}>(args?: Subset<T, Collection$currencyArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    variation<T extends Collection$variationArgs<ExtArgs> = {}>(args?: Subset<T, Collection$variationArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Collection model
   */ 
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'Int'>
    readonly userId: FieldRef<"Collection", 'Int'>
    readonly currencyId: FieldRef<"Collection", 'Int'>
    readonly variationId: FieldRef<"Collection", 'Int'>
    readonly idCategory: FieldRef<"Collection", 'Int'>
    readonly dateAdded: FieldRef<"Collection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collection createManyAndReturn
   */
  export type CollectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
  }

  /**
   * Collection.currency
   */
  export type Collection$currencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrenciesInclude<ExtArgs> | null
    where?: CurrenciesWhereInput
  }

  /**
   * Collection.variation
   */
  export type Collection$variationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    where?: VariationWhereInput
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TestScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    firstname: 'firstname',
    secondname: 'secondname',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    profile: 'profile',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CurrencyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    bank_name: 'bank_name',
    currency: 'currency',
    date_issue: 'date_issue',
    image: 'image'
  };

  export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum]


  export const CurrenciesScalarFieldEnum: {
    id: 'id',
    ref: 'ref',
    title: 'title',
    imagefront: 'imagefront',
    imageback: 'imageback',
    description: 'description',
    imagesignature: 'imagesignature',
    nom_des_signataire: 'nom_des_signataire',
    currencyId: 'currencyId',
    value: 'value',
    issued_by: 'issued_by',
    comments: 'comments',
    date: 'date',
    type: 'type'
  };

  export type CurrenciesScalarFieldEnum = (typeof CurrenciesScalarFieldEnum)[keyof typeof CurrenciesScalarFieldEnum]


  export const VariationScalarFieldEnum: {
    id: 'id',
    ref: 'ref',
    imagefront: 'imagefront',
    imageback: 'imageback',
    description: 'description',
    imagesignature: 'imagesignature',
    nom_des_signataire: 'nom_des_signataire',
    currenciesId: 'currenciesId',
    issued_by: 'issued_by',
    comments: 'comments',
    date: 'date',
    type: 'type'
  };

  export type VariationScalarFieldEnum = (typeof VariationScalarFieldEnum)[keyof typeof VariationScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currencyId: 'currencyId',
    variationId: 'variationId',
    idCategory: 'idCategory',
    dateAdded: 'dateAdded'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: IntFilter<"Test"> | number
    name?: StringFilter<"Test"> | string
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    name?: StringFilter<"Test"> | string
  }, "id">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Test"> | number
    name?: StringWithAggregatesFilter<"Test"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    secondname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    collections?: CollectionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    secondname?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: SortOrder
    role?: SortOrder
    collections?: CollectionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    secondname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    collections?: CollectionListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    secondname?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    secondname?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    profile?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type CurrencyWhereInput = {
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    id?: IntFilter<"Currency"> | number
    title?: StringFilter<"Currency"> | string
    bank_name?: StringFilter<"Currency"> | string
    currency?: StringFilter<"Currency"> | string
    date_issue?: StringFilter<"Currency"> | string
    image?: StringFilter<"Currency"> | string
    currencies?: CurrenciesListRelationFilter
  }

  export type CurrencyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    bank_name?: SortOrder
    currency?: SortOrder
    date_issue?: SortOrder
    image?: SortOrder
    currencies?: CurrenciesOrderByRelationAggregateInput
  }

  export type CurrencyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    title?: StringFilter<"Currency"> | string
    bank_name?: StringFilter<"Currency"> | string
    currency?: StringFilter<"Currency"> | string
    date_issue?: StringFilter<"Currency"> | string
    image?: StringFilter<"Currency"> | string
    currencies?: CurrenciesListRelationFilter
  }, "id">

  export type CurrencyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    bank_name?: SortOrder
    currency?: SortOrder
    date_issue?: SortOrder
    image?: SortOrder
    _count?: CurrencyCountOrderByAggregateInput
    _avg?: CurrencyAvgOrderByAggregateInput
    _max?: CurrencyMaxOrderByAggregateInput
    _min?: CurrencyMinOrderByAggregateInput
    _sum?: CurrencySumOrderByAggregateInput
  }

  export type CurrencyScalarWhereWithAggregatesInput = {
    AND?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    OR?: CurrencyScalarWhereWithAggregatesInput[]
    NOT?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Currency"> | number
    title?: StringWithAggregatesFilter<"Currency"> | string
    bank_name?: StringWithAggregatesFilter<"Currency"> | string
    currency?: StringWithAggregatesFilter<"Currency"> | string
    date_issue?: StringWithAggregatesFilter<"Currency"> | string
    image?: StringWithAggregatesFilter<"Currency"> | string
  }

  export type CurrenciesWhereInput = {
    AND?: CurrenciesWhereInput | CurrenciesWhereInput[]
    OR?: CurrenciesWhereInput[]
    NOT?: CurrenciesWhereInput | CurrenciesWhereInput[]
    id?: IntFilter<"Currencies"> | number
    ref?: StringFilter<"Currencies"> | string
    title?: StringFilter<"Currencies"> | string
    imagefront?: StringFilter<"Currencies"> | string
    imageback?: StringFilter<"Currencies"> | string
    description?: StringFilter<"Currencies"> | string
    imagesignature?: StringNullableFilter<"Currencies"> | string | null
    nom_des_signataire?: StringFilter<"Currencies"> | string
    currencyId?: IntFilter<"Currencies"> | number
    value?: StringFilter<"Currencies"> | string
    issued_by?: StringFilter<"Currencies"> | string
    comments?: StringFilter<"Currencies"> | string
    date?: StringNullableFilter<"Currencies"> | string | null
    type?: StringNullableFilter<"Currencies"> | string | null
    currency?: XOR<CurrencyRelationFilter, CurrencyWhereInput>
    variations?: VariationListRelationFilter
    collections?: CollectionListRelationFilter
  }

  export type CurrenciesOrderByWithRelationInput = {
    id?: SortOrder
    ref?: SortOrder
    title?: SortOrder
    imagefront?: SortOrder
    imageback?: SortOrder
    description?: SortOrder
    imagesignature?: SortOrderInput | SortOrder
    nom_des_signataire?: SortOrder
    currencyId?: SortOrder
    value?: SortOrder
    issued_by?: SortOrder
    comments?: SortOrder
    date?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    currency?: CurrencyOrderByWithRelationInput
    variations?: VariationOrderByRelationAggregateInput
    collections?: CollectionOrderByRelationAggregateInput
  }

  export type CurrenciesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CurrenciesWhereInput | CurrenciesWhereInput[]
    OR?: CurrenciesWhereInput[]
    NOT?: CurrenciesWhereInput | CurrenciesWhereInput[]
    ref?: StringFilter<"Currencies"> | string
    title?: StringFilter<"Currencies"> | string
    imagefront?: StringFilter<"Currencies"> | string
    imageback?: StringFilter<"Currencies"> | string
    description?: StringFilter<"Currencies"> | string
    imagesignature?: StringNullableFilter<"Currencies"> | string | null
    nom_des_signataire?: StringFilter<"Currencies"> | string
    currencyId?: IntFilter<"Currencies"> | number
    value?: StringFilter<"Currencies"> | string
    issued_by?: StringFilter<"Currencies"> | string
    comments?: StringFilter<"Currencies"> | string
    date?: StringNullableFilter<"Currencies"> | string | null
    type?: StringNullableFilter<"Currencies"> | string | null
    currency?: XOR<CurrencyRelationFilter, CurrencyWhereInput>
    variations?: VariationListRelationFilter
    collections?: CollectionListRelationFilter
  }, "id">

  export type CurrenciesOrderByWithAggregationInput = {
    id?: SortOrder
    ref?: SortOrder
    title?: SortOrder
    imagefront?: SortOrder
    imageback?: SortOrder
    description?: SortOrder
    imagesignature?: SortOrderInput | SortOrder
    nom_des_signataire?: SortOrder
    currencyId?: SortOrder
    value?: SortOrder
    issued_by?: SortOrder
    comments?: SortOrder
    date?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _count?: CurrenciesCountOrderByAggregateInput
    _avg?: CurrenciesAvgOrderByAggregateInput
    _max?: CurrenciesMaxOrderByAggregateInput
    _min?: CurrenciesMinOrderByAggregateInput
    _sum?: CurrenciesSumOrderByAggregateInput
  }

  export type CurrenciesScalarWhereWithAggregatesInput = {
    AND?: CurrenciesScalarWhereWithAggregatesInput | CurrenciesScalarWhereWithAggregatesInput[]
    OR?: CurrenciesScalarWhereWithAggregatesInput[]
    NOT?: CurrenciesScalarWhereWithAggregatesInput | CurrenciesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Currencies"> | number
    ref?: StringWithAggregatesFilter<"Currencies"> | string
    title?: StringWithAggregatesFilter<"Currencies"> | string
    imagefront?: StringWithAggregatesFilter<"Currencies"> | string
    imageback?: StringWithAggregatesFilter<"Currencies"> | string
    description?: StringWithAggregatesFilter<"Currencies"> | string
    imagesignature?: StringNullableWithAggregatesFilter<"Currencies"> | string | null
    nom_des_signataire?: StringWithAggregatesFilter<"Currencies"> | string
    currencyId?: IntWithAggregatesFilter<"Currencies"> | number
    value?: StringWithAggregatesFilter<"Currencies"> | string
    issued_by?: StringWithAggregatesFilter<"Currencies"> | string
    comments?: StringWithAggregatesFilter<"Currencies"> | string
    date?: StringNullableWithAggregatesFilter<"Currencies"> | string | null
    type?: StringNullableWithAggregatesFilter<"Currencies"> | string | null
  }

  export type VariationWhereInput = {
    AND?: VariationWhereInput | VariationWhereInput[]
    OR?: VariationWhereInput[]
    NOT?: VariationWhereInput | VariationWhereInput[]
    id?: IntFilter<"Variation"> | number
    ref?: StringFilter<"Variation"> | string
    imagefront?: StringFilter<"Variation"> | string
    imageback?: StringFilter<"Variation"> | string
    description?: StringFilter<"Variation"> | string
    imagesignature?: StringNullableFilter<"Variation"> | string | null
    nom_des_signataire?: StringFilter<"Variation"> | string
    currenciesId?: IntFilter<"Variation"> | number
    issued_by?: StringFilter<"Variation"> | string
    comments?: StringFilter<"Variation"> | string
    date?: StringNullableFilter<"Variation"> | string | null
    type?: StringNullableFilter<"Variation"> | string | null
    currencies?: XOR<CurrenciesRelationFilter, CurrenciesWhereInput>
    collections?: CollectionListRelationFilter
  }

  export type VariationOrderByWithRelationInput = {
    id?: SortOrder
    ref?: SortOrder
    imagefront?: SortOrder
    imageback?: SortOrder
    description?: SortOrder
    imagesignature?: SortOrderInput | SortOrder
    nom_des_signataire?: SortOrder
    currenciesId?: SortOrder
    issued_by?: SortOrder
    comments?: SortOrder
    date?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    currencies?: CurrenciesOrderByWithRelationInput
    collections?: CollectionOrderByRelationAggregateInput
  }

  export type VariationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VariationWhereInput | VariationWhereInput[]
    OR?: VariationWhereInput[]
    NOT?: VariationWhereInput | VariationWhereInput[]
    ref?: StringFilter<"Variation"> | string
    imagefront?: StringFilter<"Variation"> | string
    imageback?: StringFilter<"Variation"> | string
    description?: StringFilter<"Variation"> | string
    imagesignature?: StringNullableFilter<"Variation"> | string | null
    nom_des_signataire?: StringFilter<"Variation"> | string
    currenciesId?: IntFilter<"Variation"> | number
    issued_by?: StringFilter<"Variation"> | string
    comments?: StringFilter<"Variation"> | string
    date?: StringNullableFilter<"Variation"> | string | null
    type?: StringNullableFilter<"Variation"> | string | null
    currencies?: XOR<CurrenciesRelationFilter, CurrenciesWhereInput>
    collections?: CollectionListRelationFilter
  }, "id">

  export type VariationOrderByWithAggregationInput = {
    id?: SortOrder
    ref?: SortOrder
    imagefront?: SortOrder
    imageback?: SortOrder
    description?: SortOrder
    imagesignature?: SortOrderInput | SortOrder
    nom_des_signataire?: SortOrder
    currenciesId?: SortOrder
    issued_by?: SortOrder
    comments?: SortOrder
    date?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _count?: VariationCountOrderByAggregateInput
    _avg?: VariationAvgOrderByAggregateInput
    _max?: VariationMaxOrderByAggregateInput
    _min?: VariationMinOrderByAggregateInput
    _sum?: VariationSumOrderByAggregateInput
  }

  export type VariationScalarWhereWithAggregatesInput = {
    AND?: VariationScalarWhereWithAggregatesInput | VariationScalarWhereWithAggregatesInput[]
    OR?: VariationScalarWhereWithAggregatesInput[]
    NOT?: VariationScalarWhereWithAggregatesInput | VariationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Variation"> | number
    ref?: StringWithAggregatesFilter<"Variation"> | string
    imagefront?: StringWithAggregatesFilter<"Variation"> | string
    imageback?: StringWithAggregatesFilter<"Variation"> | string
    description?: StringWithAggregatesFilter<"Variation"> | string
    imagesignature?: StringNullableWithAggregatesFilter<"Variation"> | string | null
    nom_des_signataire?: StringWithAggregatesFilter<"Variation"> | string
    currenciesId?: IntWithAggregatesFilter<"Variation"> | number
    issued_by?: StringWithAggregatesFilter<"Variation"> | string
    comments?: StringWithAggregatesFilter<"Variation"> | string
    date?: StringNullableWithAggregatesFilter<"Variation"> | string | null
    type?: StringNullableWithAggregatesFilter<"Variation"> | string | null
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: IntFilter<"Collection"> | number
    userId?: IntFilter<"Collection"> | number
    currencyId?: IntNullableFilter<"Collection"> | number | null
    variationId?: IntNullableFilter<"Collection"> | number | null
    idCategory?: IntNullableFilter<"Collection"> | number | null
    dateAdded?: DateTimeFilter<"Collection"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    currency?: XOR<CurrenciesNullableRelationFilter, CurrenciesWhereInput> | null
    variation?: XOR<VariationNullableRelationFilter, VariationWhereInput> | null
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyId?: SortOrderInput | SortOrder
    variationId?: SortOrderInput | SortOrder
    idCategory?: SortOrderInput | SortOrder
    dateAdded?: SortOrder
    user?: UserOrderByWithRelationInput
    currency?: CurrenciesOrderByWithRelationInput
    variation?: VariationOrderByWithRelationInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    userId?: IntFilter<"Collection"> | number
    currencyId?: IntNullableFilter<"Collection"> | number | null
    variationId?: IntNullableFilter<"Collection"> | number | null
    idCategory?: IntNullableFilter<"Collection"> | number | null
    dateAdded?: DateTimeFilter<"Collection"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    currency?: XOR<CurrenciesNullableRelationFilter, CurrenciesWhereInput> | null
    variation?: XOR<VariationNullableRelationFilter, VariationWhereInput> | null
  }, "id">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyId?: SortOrderInput | SortOrder
    variationId?: SortOrderInput | SortOrder
    idCategory?: SortOrderInput | SortOrder
    dateAdded?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _avg?: CollectionAvgOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
    _sum?: CollectionSumOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Collection"> | number
    userId?: IntWithAggregatesFilter<"Collection"> | number
    currencyId?: IntNullableWithAggregatesFilter<"Collection"> | number | null
    variationId?: IntNullableWithAggregatesFilter<"Collection"> | number | null
    idCategory?: IntNullableWithAggregatesFilter<"Collection"> | number | null
    dateAdded?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
  }

  export type TestCreateInput = {
    name: string
  }

  export type TestUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type TestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TestCreateManyInput = {
    id?: number
    name: string
  }

  export type TestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    email: string
    username: string
    firstname?: string
    secondname?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: string
    role?: $Enums.Role
    collections?: CollectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    firstname?: string
    secondname?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: string
    role?: $Enums.Role
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    collections?: CollectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    firstname?: string
    secondname?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CurrencyCreateInput = {
    title?: string
    bank_name?: string
    currency?: string
    date_issue?: string
    image: string
    currencies?: CurrenciesCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUncheckedCreateInput = {
    id?: number
    title?: string
    bank_name?: string
    currency?: string
    date_issue?: string
    image: string
    currencies?: CurrenciesUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    bank_name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    date_issue?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    currencies?: CurrenciesUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    bank_name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    date_issue?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    currencies?: CurrenciesUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyCreateManyInput = {
    id?: number
    title?: string
    bank_name?: string
    currency?: string
    date_issue?: string
    image: string
  }

  export type CurrencyUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    bank_name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    date_issue?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    bank_name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    date_issue?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type CurrenciesCreateInput = {
    ref: string
    title: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    value: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
    currency: CurrencyCreateNestedOneWithoutCurrenciesInput
    variations?: VariationCreateNestedManyWithoutCurrenciesInput
    collections?: CollectionCreateNestedManyWithoutCurrencyInput
  }

  export type CurrenciesUncheckedCreateInput = {
    id?: number
    ref: string
    title: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    currencyId: number
    value: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
    variations?: VariationUncheckedCreateNestedManyWithoutCurrenciesInput
    collections?: CollectionUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrenciesUpdateInput = {
    ref?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: CurrencyUpdateOneRequiredWithoutCurrenciesNestedInput
    variations?: VariationUpdateManyWithoutCurrenciesNestedInput
    collections?: CollectionUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrenciesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    currencyId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    variations?: VariationUncheckedUpdateManyWithoutCurrenciesNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrenciesCreateManyInput = {
    id?: number
    ref: string
    title: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    currencyId: number
    value: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
  }

  export type CurrenciesUpdateManyMutationInput = {
    ref?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CurrenciesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    currencyId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VariationCreateInput = {
    ref: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
    currencies: CurrenciesCreateNestedOneWithoutVariationsInput
    collections?: CollectionCreateNestedManyWithoutVariationInput
  }

  export type VariationUncheckedCreateInput = {
    id?: number
    ref: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    currenciesId: number
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
    collections?: CollectionUncheckedCreateNestedManyWithoutVariationInput
  }

  export type VariationUpdateInput = {
    ref?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    currencies?: CurrenciesUpdateOneRequiredWithoutVariationsNestedInput
    collections?: CollectionUpdateManyWithoutVariationNestedInput
  }

  export type VariationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    currenciesId?: IntFieldUpdateOperationsInput | number
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    collections?: CollectionUncheckedUpdateManyWithoutVariationNestedInput
  }

  export type VariationCreateManyInput = {
    id?: number
    ref: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    currenciesId: number
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
  }

  export type VariationUpdateManyMutationInput = {
    ref?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VariationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    currenciesId?: IntFieldUpdateOperationsInput | number
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionCreateInput = {
    idCategory?: number | null
    dateAdded?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
    currency?: CurrenciesCreateNestedOneWithoutCollectionsInput
    variation?: VariationCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: number
    userId: number
    currencyId?: number | null
    variationId?: number | null
    idCategory?: number | null
    dateAdded?: Date | string
  }

  export type CollectionUpdateInput = {
    idCategory?: NullableIntFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
    currency?: CurrenciesUpdateOneWithoutCollectionsNestedInput
    variation?: VariationUpdateOneWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    variationId?: NullableIntFieldUpdateOperationsInput | number | null
    idCategory?: NullableIntFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionCreateManyInput = {
    id?: number
    userId: number
    currencyId?: number | null
    variationId?: number | null
    idCategory?: number | null
    dateAdded?: Date | string
  }

  export type CollectionUpdateManyMutationInput = {
    idCategory?: NullableIntFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    variationId?: NullableIntFieldUpdateOperationsInput | number | null
    idCategory?: NullableIntFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput
    some?: CollectionWhereInput
    none?: CollectionWhereInput
  }

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    secondname?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    secondname?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    secondname?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type CurrenciesListRelationFilter = {
    every?: CurrenciesWhereInput
    some?: CurrenciesWhereInput
    none?: CurrenciesWhereInput
  }

  export type CurrenciesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurrencyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    bank_name?: SortOrder
    currency?: SortOrder
    date_issue?: SortOrder
    image?: SortOrder
  }

  export type CurrencyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CurrencyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    bank_name?: SortOrder
    currency?: SortOrder
    date_issue?: SortOrder
    image?: SortOrder
  }

  export type CurrencyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    bank_name?: SortOrder
    currency?: SortOrder
    date_issue?: SortOrder
    image?: SortOrder
  }

  export type CurrencySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CurrencyRelationFilter = {
    is?: CurrencyWhereInput
    isNot?: CurrencyWhereInput
  }

  export type VariationListRelationFilter = {
    every?: VariationWhereInput
    some?: VariationWhereInput
    none?: VariationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VariationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurrenciesCountOrderByAggregateInput = {
    id?: SortOrder
    ref?: SortOrder
    title?: SortOrder
    imagefront?: SortOrder
    imageback?: SortOrder
    description?: SortOrder
    imagesignature?: SortOrder
    nom_des_signataire?: SortOrder
    currencyId?: SortOrder
    value?: SortOrder
    issued_by?: SortOrder
    comments?: SortOrder
    date?: SortOrder
    type?: SortOrder
  }

  export type CurrenciesAvgOrderByAggregateInput = {
    id?: SortOrder
    currencyId?: SortOrder
  }

  export type CurrenciesMaxOrderByAggregateInput = {
    id?: SortOrder
    ref?: SortOrder
    title?: SortOrder
    imagefront?: SortOrder
    imageback?: SortOrder
    description?: SortOrder
    imagesignature?: SortOrder
    nom_des_signataire?: SortOrder
    currencyId?: SortOrder
    value?: SortOrder
    issued_by?: SortOrder
    comments?: SortOrder
    date?: SortOrder
    type?: SortOrder
  }

  export type CurrenciesMinOrderByAggregateInput = {
    id?: SortOrder
    ref?: SortOrder
    title?: SortOrder
    imagefront?: SortOrder
    imageback?: SortOrder
    description?: SortOrder
    imagesignature?: SortOrder
    nom_des_signataire?: SortOrder
    currencyId?: SortOrder
    value?: SortOrder
    issued_by?: SortOrder
    comments?: SortOrder
    date?: SortOrder
    type?: SortOrder
  }

  export type CurrenciesSumOrderByAggregateInput = {
    id?: SortOrder
    currencyId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CurrenciesRelationFilter = {
    is?: CurrenciesWhereInput
    isNot?: CurrenciesWhereInput
  }

  export type VariationCountOrderByAggregateInput = {
    id?: SortOrder
    ref?: SortOrder
    imagefront?: SortOrder
    imageback?: SortOrder
    description?: SortOrder
    imagesignature?: SortOrder
    nom_des_signataire?: SortOrder
    currenciesId?: SortOrder
    issued_by?: SortOrder
    comments?: SortOrder
    date?: SortOrder
    type?: SortOrder
  }

  export type VariationAvgOrderByAggregateInput = {
    id?: SortOrder
    currenciesId?: SortOrder
  }

  export type VariationMaxOrderByAggregateInput = {
    id?: SortOrder
    ref?: SortOrder
    imagefront?: SortOrder
    imageback?: SortOrder
    description?: SortOrder
    imagesignature?: SortOrder
    nom_des_signataire?: SortOrder
    currenciesId?: SortOrder
    issued_by?: SortOrder
    comments?: SortOrder
    date?: SortOrder
    type?: SortOrder
  }

  export type VariationMinOrderByAggregateInput = {
    id?: SortOrder
    ref?: SortOrder
    imagefront?: SortOrder
    imageback?: SortOrder
    description?: SortOrder
    imagesignature?: SortOrder
    nom_des_signataire?: SortOrder
    currenciesId?: SortOrder
    issued_by?: SortOrder
    comments?: SortOrder
    date?: SortOrder
    type?: SortOrder
  }

  export type VariationSumOrderByAggregateInput = {
    id?: SortOrder
    currenciesId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CurrenciesNullableRelationFilter = {
    is?: CurrenciesWhereInput | null
    isNot?: CurrenciesWhereInput | null
  }

  export type VariationNullableRelationFilter = {
    is?: VariationWhereInput | null
    isNot?: VariationWhereInput | null
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyId?: SortOrder
    variationId?: SortOrder
    idCategory?: SortOrder
    dateAdded?: SortOrder
  }

  export type CollectionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyId?: SortOrder
    variationId?: SortOrder
    idCategory?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyId?: SortOrder
    variationId?: SortOrder
    idCategory?: SortOrder
    dateAdded?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyId?: SortOrder
    variationId?: SortOrder
    idCategory?: SortOrder
    dateAdded?: SortOrder
  }

  export type CollectionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyId?: SortOrder
    variationId?: SortOrder
    idCategory?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CollectionCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type CollectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type CurrenciesCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<CurrenciesCreateWithoutCurrencyInput, CurrenciesUncheckedCreateWithoutCurrencyInput> | CurrenciesCreateWithoutCurrencyInput[] | CurrenciesUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: CurrenciesCreateOrConnectWithoutCurrencyInput | CurrenciesCreateOrConnectWithoutCurrencyInput[]
    createMany?: CurrenciesCreateManyCurrencyInputEnvelope
    connect?: CurrenciesWhereUniqueInput | CurrenciesWhereUniqueInput[]
  }

  export type CurrenciesUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<CurrenciesCreateWithoutCurrencyInput, CurrenciesUncheckedCreateWithoutCurrencyInput> | CurrenciesCreateWithoutCurrencyInput[] | CurrenciesUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: CurrenciesCreateOrConnectWithoutCurrencyInput | CurrenciesCreateOrConnectWithoutCurrencyInput[]
    createMany?: CurrenciesCreateManyCurrencyInputEnvelope
    connect?: CurrenciesWhereUniqueInput | CurrenciesWhereUniqueInput[]
  }

  export type CurrenciesUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<CurrenciesCreateWithoutCurrencyInput, CurrenciesUncheckedCreateWithoutCurrencyInput> | CurrenciesCreateWithoutCurrencyInput[] | CurrenciesUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: CurrenciesCreateOrConnectWithoutCurrencyInput | CurrenciesCreateOrConnectWithoutCurrencyInput[]
    upsert?: CurrenciesUpsertWithWhereUniqueWithoutCurrencyInput | CurrenciesUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: CurrenciesCreateManyCurrencyInputEnvelope
    set?: CurrenciesWhereUniqueInput | CurrenciesWhereUniqueInput[]
    disconnect?: CurrenciesWhereUniqueInput | CurrenciesWhereUniqueInput[]
    delete?: CurrenciesWhereUniqueInput | CurrenciesWhereUniqueInput[]
    connect?: CurrenciesWhereUniqueInput | CurrenciesWhereUniqueInput[]
    update?: CurrenciesUpdateWithWhereUniqueWithoutCurrencyInput | CurrenciesUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: CurrenciesUpdateManyWithWhereWithoutCurrencyInput | CurrenciesUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: CurrenciesScalarWhereInput | CurrenciesScalarWhereInput[]
  }

  export type CurrenciesUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<CurrenciesCreateWithoutCurrencyInput, CurrenciesUncheckedCreateWithoutCurrencyInput> | CurrenciesCreateWithoutCurrencyInput[] | CurrenciesUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: CurrenciesCreateOrConnectWithoutCurrencyInput | CurrenciesCreateOrConnectWithoutCurrencyInput[]
    upsert?: CurrenciesUpsertWithWhereUniqueWithoutCurrencyInput | CurrenciesUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: CurrenciesCreateManyCurrencyInputEnvelope
    set?: CurrenciesWhereUniqueInput | CurrenciesWhereUniqueInput[]
    disconnect?: CurrenciesWhereUniqueInput | CurrenciesWhereUniqueInput[]
    delete?: CurrenciesWhereUniqueInput | CurrenciesWhereUniqueInput[]
    connect?: CurrenciesWhereUniqueInput | CurrenciesWhereUniqueInput[]
    update?: CurrenciesUpdateWithWhereUniqueWithoutCurrencyInput | CurrenciesUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: CurrenciesUpdateManyWithWhereWithoutCurrencyInput | CurrenciesUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: CurrenciesScalarWhereInput | CurrenciesScalarWhereInput[]
  }

  export type CurrencyCreateNestedOneWithoutCurrenciesInput = {
    create?: XOR<CurrencyCreateWithoutCurrenciesInput, CurrencyUncheckedCreateWithoutCurrenciesInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutCurrenciesInput
    connect?: CurrencyWhereUniqueInput
  }

  export type VariationCreateNestedManyWithoutCurrenciesInput = {
    create?: XOR<VariationCreateWithoutCurrenciesInput, VariationUncheckedCreateWithoutCurrenciesInput> | VariationCreateWithoutCurrenciesInput[] | VariationUncheckedCreateWithoutCurrenciesInput[]
    connectOrCreate?: VariationCreateOrConnectWithoutCurrenciesInput | VariationCreateOrConnectWithoutCurrenciesInput[]
    createMany?: VariationCreateManyCurrenciesInputEnvelope
    connect?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
  }

  export type CollectionCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<CollectionCreateWithoutCurrencyInput, CollectionUncheckedCreateWithoutCurrencyInput> | CollectionCreateWithoutCurrencyInput[] | CollectionUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutCurrencyInput | CollectionCreateOrConnectWithoutCurrencyInput[]
    createMany?: CollectionCreateManyCurrencyInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type VariationUncheckedCreateNestedManyWithoutCurrenciesInput = {
    create?: XOR<VariationCreateWithoutCurrenciesInput, VariationUncheckedCreateWithoutCurrenciesInput> | VariationCreateWithoutCurrenciesInput[] | VariationUncheckedCreateWithoutCurrenciesInput[]
    connectOrCreate?: VariationCreateOrConnectWithoutCurrenciesInput | VariationCreateOrConnectWithoutCurrenciesInput[]
    createMany?: VariationCreateManyCurrenciesInputEnvelope
    connect?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<CollectionCreateWithoutCurrencyInput, CollectionUncheckedCreateWithoutCurrencyInput> | CollectionCreateWithoutCurrencyInput[] | CollectionUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutCurrencyInput | CollectionCreateOrConnectWithoutCurrencyInput[]
    createMany?: CollectionCreateManyCurrencyInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CurrencyUpdateOneRequiredWithoutCurrenciesNestedInput = {
    create?: XOR<CurrencyCreateWithoutCurrenciesInput, CurrencyUncheckedCreateWithoutCurrenciesInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutCurrenciesInput
    upsert?: CurrencyUpsertWithoutCurrenciesInput
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutCurrenciesInput, CurrencyUpdateWithoutCurrenciesInput>, CurrencyUncheckedUpdateWithoutCurrenciesInput>
  }

  export type VariationUpdateManyWithoutCurrenciesNestedInput = {
    create?: XOR<VariationCreateWithoutCurrenciesInput, VariationUncheckedCreateWithoutCurrenciesInput> | VariationCreateWithoutCurrenciesInput[] | VariationUncheckedCreateWithoutCurrenciesInput[]
    connectOrCreate?: VariationCreateOrConnectWithoutCurrenciesInput | VariationCreateOrConnectWithoutCurrenciesInput[]
    upsert?: VariationUpsertWithWhereUniqueWithoutCurrenciesInput | VariationUpsertWithWhereUniqueWithoutCurrenciesInput[]
    createMany?: VariationCreateManyCurrenciesInputEnvelope
    set?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    disconnect?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    delete?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    connect?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    update?: VariationUpdateWithWhereUniqueWithoutCurrenciesInput | VariationUpdateWithWhereUniqueWithoutCurrenciesInput[]
    updateMany?: VariationUpdateManyWithWhereWithoutCurrenciesInput | VariationUpdateManyWithWhereWithoutCurrenciesInput[]
    deleteMany?: VariationScalarWhereInput | VariationScalarWhereInput[]
  }

  export type CollectionUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<CollectionCreateWithoutCurrencyInput, CollectionUncheckedCreateWithoutCurrencyInput> | CollectionCreateWithoutCurrencyInput[] | CollectionUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutCurrencyInput | CollectionCreateOrConnectWithoutCurrencyInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutCurrencyInput | CollectionUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: CollectionCreateManyCurrencyInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutCurrencyInput | CollectionUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutCurrencyInput | CollectionUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type VariationUncheckedUpdateManyWithoutCurrenciesNestedInput = {
    create?: XOR<VariationCreateWithoutCurrenciesInput, VariationUncheckedCreateWithoutCurrenciesInput> | VariationCreateWithoutCurrenciesInput[] | VariationUncheckedCreateWithoutCurrenciesInput[]
    connectOrCreate?: VariationCreateOrConnectWithoutCurrenciesInput | VariationCreateOrConnectWithoutCurrenciesInput[]
    upsert?: VariationUpsertWithWhereUniqueWithoutCurrenciesInput | VariationUpsertWithWhereUniqueWithoutCurrenciesInput[]
    createMany?: VariationCreateManyCurrenciesInputEnvelope
    set?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    disconnect?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    delete?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    connect?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    update?: VariationUpdateWithWhereUniqueWithoutCurrenciesInput | VariationUpdateWithWhereUniqueWithoutCurrenciesInput[]
    updateMany?: VariationUpdateManyWithWhereWithoutCurrenciesInput | VariationUpdateManyWithWhereWithoutCurrenciesInput[]
    deleteMany?: VariationScalarWhereInput | VariationScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<CollectionCreateWithoutCurrencyInput, CollectionUncheckedCreateWithoutCurrencyInput> | CollectionCreateWithoutCurrencyInput[] | CollectionUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutCurrencyInput | CollectionCreateOrConnectWithoutCurrencyInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutCurrencyInput | CollectionUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: CollectionCreateManyCurrencyInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutCurrencyInput | CollectionUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutCurrencyInput | CollectionUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type CurrenciesCreateNestedOneWithoutVariationsInput = {
    create?: XOR<CurrenciesCreateWithoutVariationsInput, CurrenciesUncheckedCreateWithoutVariationsInput>
    connectOrCreate?: CurrenciesCreateOrConnectWithoutVariationsInput
    connect?: CurrenciesWhereUniqueInput
  }

  export type CollectionCreateNestedManyWithoutVariationInput = {
    create?: XOR<CollectionCreateWithoutVariationInput, CollectionUncheckedCreateWithoutVariationInput> | CollectionCreateWithoutVariationInput[] | CollectionUncheckedCreateWithoutVariationInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutVariationInput | CollectionCreateOrConnectWithoutVariationInput[]
    createMany?: CollectionCreateManyVariationInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutVariationInput = {
    create?: XOR<CollectionCreateWithoutVariationInput, CollectionUncheckedCreateWithoutVariationInput> | CollectionCreateWithoutVariationInput[] | CollectionUncheckedCreateWithoutVariationInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutVariationInput | CollectionCreateOrConnectWithoutVariationInput[]
    createMany?: CollectionCreateManyVariationInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type CurrenciesUpdateOneRequiredWithoutVariationsNestedInput = {
    create?: XOR<CurrenciesCreateWithoutVariationsInput, CurrenciesUncheckedCreateWithoutVariationsInput>
    connectOrCreate?: CurrenciesCreateOrConnectWithoutVariationsInput
    upsert?: CurrenciesUpsertWithoutVariationsInput
    connect?: CurrenciesWhereUniqueInput
    update?: XOR<XOR<CurrenciesUpdateToOneWithWhereWithoutVariationsInput, CurrenciesUpdateWithoutVariationsInput>, CurrenciesUncheckedUpdateWithoutVariationsInput>
  }

  export type CollectionUpdateManyWithoutVariationNestedInput = {
    create?: XOR<CollectionCreateWithoutVariationInput, CollectionUncheckedCreateWithoutVariationInput> | CollectionCreateWithoutVariationInput[] | CollectionUncheckedCreateWithoutVariationInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutVariationInput | CollectionCreateOrConnectWithoutVariationInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutVariationInput | CollectionUpsertWithWhereUniqueWithoutVariationInput[]
    createMany?: CollectionCreateManyVariationInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutVariationInput | CollectionUpdateWithWhereUniqueWithoutVariationInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutVariationInput | CollectionUpdateManyWithWhereWithoutVariationInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutVariationNestedInput = {
    create?: XOR<CollectionCreateWithoutVariationInput, CollectionUncheckedCreateWithoutVariationInput> | CollectionCreateWithoutVariationInput[] | CollectionUncheckedCreateWithoutVariationInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutVariationInput | CollectionCreateOrConnectWithoutVariationInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutVariationInput | CollectionUpsertWithWhereUniqueWithoutVariationInput[]
    createMany?: CollectionCreateManyVariationInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutVariationInput | CollectionUpdateWithWhereUniqueWithoutVariationInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutVariationInput | CollectionUpdateManyWithWhereWithoutVariationInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    connect?: UserWhereUniqueInput
  }

  export type CurrenciesCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<CurrenciesCreateWithoutCollectionsInput, CurrenciesUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: CurrenciesCreateOrConnectWithoutCollectionsInput
    connect?: CurrenciesWhereUniqueInput
  }

  export type VariationCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<VariationCreateWithoutCollectionsInput, VariationUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: VariationCreateOrConnectWithoutCollectionsInput
    connect?: VariationWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    upsert?: UserUpsertWithoutCollectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollectionsInput, UserUpdateWithoutCollectionsInput>, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type CurrenciesUpdateOneWithoutCollectionsNestedInput = {
    create?: XOR<CurrenciesCreateWithoutCollectionsInput, CurrenciesUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: CurrenciesCreateOrConnectWithoutCollectionsInput
    upsert?: CurrenciesUpsertWithoutCollectionsInput
    disconnect?: CurrenciesWhereInput | boolean
    delete?: CurrenciesWhereInput | boolean
    connect?: CurrenciesWhereUniqueInput
    update?: XOR<XOR<CurrenciesUpdateToOneWithWhereWithoutCollectionsInput, CurrenciesUpdateWithoutCollectionsInput>, CurrenciesUncheckedUpdateWithoutCollectionsInput>
  }

  export type VariationUpdateOneWithoutCollectionsNestedInput = {
    create?: XOR<VariationCreateWithoutCollectionsInput, VariationUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: VariationCreateOrConnectWithoutCollectionsInput
    upsert?: VariationUpsertWithoutCollectionsInput
    disconnect?: VariationWhereInput | boolean
    delete?: VariationWhereInput | boolean
    connect?: VariationWhereUniqueInput
    update?: XOR<XOR<VariationUpdateToOneWithWhereWithoutCollectionsInput, VariationUpdateWithoutCollectionsInput>, VariationUncheckedUpdateWithoutCollectionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CollectionCreateWithoutUserInput = {
    idCategory?: number | null
    dateAdded?: Date | string
    currency?: CurrenciesCreateNestedOneWithoutCollectionsInput
    variation?: VariationCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateWithoutUserInput = {
    id?: number
    currencyId?: number | null
    variationId?: number | null
    idCategory?: number | null
    dateAdded?: Date | string
  }

  export type CollectionCreateOrConnectWithoutUserInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionCreateManyUserInputEnvelope = {
    data: CollectionCreateManyUserInput | CollectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CollectionUpsertWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
  }

  export type CollectionUpdateManyWithWhereWithoutUserInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutUserInput>
  }

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    OR?: CollectionScalarWhereInput[]
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    id?: IntFilter<"Collection"> | number
    userId?: IntFilter<"Collection"> | number
    currencyId?: IntNullableFilter<"Collection"> | number | null
    variationId?: IntNullableFilter<"Collection"> | number | null
    idCategory?: IntNullableFilter<"Collection"> | number | null
    dateAdded?: DateTimeFilter<"Collection"> | Date | string
  }

  export type CurrenciesCreateWithoutCurrencyInput = {
    ref: string
    title: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    value: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
    variations?: VariationCreateNestedManyWithoutCurrenciesInput
    collections?: CollectionCreateNestedManyWithoutCurrencyInput
  }

  export type CurrenciesUncheckedCreateWithoutCurrencyInput = {
    id?: number
    ref: string
    title: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    value: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
    variations?: VariationUncheckedCreateNestedManyWithoutCurrenciesInput
    collections?: CollectionUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrenciesCreateOrConnectWithoutCurrencyInput = {
    where: CurrenciesWhereUniqueInput
    create: XOR<CurrenciesCreateWithoutCurrencyInput, CurrenciesUncheckedCreateWithoutCurrencyInput>
  }

  export type CurrenciesCreateManyCurrencyInputEnvelope = {
    data: CurrenciesCreateManyCurrencyInput | CurrenciesCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type CurrenciesUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: CurrenciesWhereUniqueInput
    update: XOR<CurrenciesUpdateWithoutCurrencyInput, CurrenciesUncheckedUpdateWithoutCurrencyInput>
    create: XOR<CurrenciesCreateWithoutCurrencyInput, CurrenciesUncheckedCreateWithoutCurrencyInput>
  }

  export type CurrenciesUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: CurrenciesWhereUniqueInput
    data: XOR<CurrenciesUpdateWithoutCurrencyInput, CurrenciesUncheckedUpdateWithoutCurrencyInput>
  }

  export type CurrenciesUpdateManyWithWhereWithoutCurrencyInput = {
    where: CurrenciesScalarWhereInput
    data: XOR<CurrenciesUpdateManyMutationInput, CurrenciesUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type CurrenciesScalarWhereInput = {
    AND?: CurrenciesScalarWhereInput | CurrenciesScalarWhereInput[]
    OR?: CurrenciesScalarWhereInput[]
    NOT?: CurrenciesScalarWhereInput | CurrenciesScalarWhereInput[]
    id?: IntFilter<"Currencies"> | number
    ref?: StringFilter<"Currencies"> | string
    title?: StringFilter<"Currencies"> | string
    imagefront?: StringFilter<"Currencies"> | string
    imageback?: StringFilter<"Currencies"> | string
    description?: StringFilter<"Currencies"> | string
    imagesignature?: StringNullableFilter<"Currencies"> | string | null
    nom_des_signataire?: StringFilter<"Currencies"> | string
    currencyId?: IntFilter<"Currencies"> | number
    value?: StringFilter<"Currencies"> | string
    issued_by?: StringFilter<"Currencies"> | string
    comments?: StringFilter<"Currencies"> | string
    date?: StringNullableFilter<"Currencies"> | string | null
    type?: StringNullableFilter<"Currencies"> | string | null
  }

  export type CurrencyCreateWithoutCurrenciesInput = {
    title?: string
    bank_name?: string
    currency?: string
    date_issue?: string
    image: string
  }

  export type CurrencyUncheckedCreateWithoutCurrenciesInput = {
    id?: number
    title?: string
    bank_name?: string
    currency?: string
    date_issue?: string
    image: string
  }

  export type CurrencyCreateOrConnectWithoutCurrenciesInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutCurrenciesInput, CurrencyUncheckedCreateWithoutCurrenciesInput>
  }

  export type VariationCreateWithoutCurrenciesInput = {
    ref: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
    collections?: CollectionCreateNestedManyWithoutVariationInput
  }

  export type VariationUncheckedCreateWithoutCurrenciesInput = {
    id?: number
    ref: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
    collections?: CollectionUncheckedCreateNestedManyWithoutVariationInput
  }

  export type VariationCreateOrConnectWithoutCurrenciesInput = {
    where: VariationWhereUniqueInput
    create: XOR<VariationCreateWithoutCurrenciesInput, VariationUncheckedCreateWithoutCurrenciesInput>
  }

  export type VariationCreateManyCurrenciesInputEnvelope = {
    data: VariationCreateManyCurrenciesInput | VariationCreateManyCurrenciesInput[]
    skipDuplicates?: boolean
  }

  export type CollectionCreateWithoutCurrencyInput = {
    idCategory?: number | null
    dateAdded?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
    variation?: VariationCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateWithoutCurrencyInput = {
    id?: number
    userId: number
    variationId?: number | null
    idCategory?: number | null
    dateAdded?: Date | string
  }

  export type CollectionCreateOrConnectWithoutCurrencyInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutCurrencyInput, CollectionUncheckedCreateWithoutCurrencyInput>
  }

  export type CollectionCreateManyCurrencyInputEnvelope = {
    data: CollectionCreateManyCurrencyInput | CollectionCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type CurrencyUpsertWithoutCurrenciesInput = {
    update: XOR<CurrencyUpdateWithoutCurrenciesInput, CurrencyUncheckedUpdateWithoutCurrenciesInput>
    create: XOR<CurrencyCreateWithoutCurrenciesInput, CurrencyUncheckedCreateWithoutCurrenciesInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutCurrenciesInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutCurrenciesInput, CurrencyUncheckedUpdateWithoutCurrenciesInput>
  }

  export type CurrencyUpdateWithoutCurrenciesInput = {
    title?: StringFieldUpdateOperationsInput | string
    bank_name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    date_issue?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyUncheckedUpdateWithoutCurrenciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    bank_name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    date_issue?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type VariationUpsertWithWhereUniqueWithoutCurrenciesInput = {
    where: VariationWhereUniqueInput
    update: XOR<VariationUpdateWithoutCurrenciesInput, VariationUncheckedUpdateWithoutCurrenciesInput>
    create: XOR<VariationCreateWithoutCurrenciesInput, VariationUncheckedCreateWithoutCurrenciesInput>
  }

  export type VariationUpdateWithWhereUniqueWithoutCurrenciesInput = {
    where: VariationWhereUniqueInput
    data: XOR<VariationUpdateWithoutCurrenciesInput, VariationUncheckedUpdateWithoutCurrenciesInput>
  }

  export type VariationUpdateManyWithWhereWithoutCurrenciesInput = {
    where: VariationScalarWhereInput
    data: XOR<VariationUpdateManyMutationInput, VariationUncheckedUpdateManyWithoutCurrenciesInput>
  }

  export type VariationScalarWhereInput = {
    AND?: VariationScalarWhereInput | VariationScalarWhereInput[]
    OR?: VariationScalarWhereInput[]
    NOT?: VariationScalarWhereInput | VariationScalarWhereInput[]
    id?: IntFilter<"Variation"> | number
    ref?: StringFilter<"Variation"> | string
    imagefront?: StringFilter<"Variation"> | string
    imageback?: StringFilter<"Variation"> | string
    description?: StringFilter<"Variation"> | string
    imagesignature?: StringNullableFilter<"Variation"> | string | null
    nom_des_signataire?: StringFilter<"Variation"> | string
    currenciesId?: IntFilter<"Variation"> | number
    issued_by?: StringFilter<"Variation"> | string
    comments?: StringFilter<"Variation"> | string
    date?: StringNullableFilter<"Variation"> | string | null
    type?: StringNullableFilter<"Variation"> | string | null
  }

  export type CollectionUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutCurrencyInput, CollectionUncheckedUpdateWithoutCurrencyInput>
    create: XOR<CollectionCreateWithoutCurrencyInput, CollectionUncheckedCreateWithoutCurrencyInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutCurrencyInput, CollectionUncheckedUpdateWithoutCurrencyInput>
  }

  export type CollectionUpdateManyWithWhereWithoutCurrencyInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type CurrenciesCreateWithoutVariationsInput = {
    ref: string
    title: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    value: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
    currency: CurrencyCreateNestedOneWithoutCurrenciesInput
    collections?: CollectionCreateNestedManyWithoutCurrencyInput
  }

  export type CurrenciesUncheckedCreateWithoutVariationsInput = {
    id?: number
    ref: string
    title: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    currencyId: number
    value: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
    collections?: CollectionUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrenciesCreateOrConnectWithoutVariationsInput = {
    where: CurrenciesWhereUniqueInput
    create: XOR<CurrenciesCreateWithoutVariationsInput, CurrenciesUncheckedCreateWithoutVariationsInput>
  }

  export type CollectionCreateWithoutVariationInput = {
    idCategory?: number | null
    dateAdded?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
    currency?: CurrenciesCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateWithoutVariationInput = {
    id?: number
    userId: number
    currencyId?: number | null
    idCategory?: number | null
    dateAdded?: Date | string
  }

  export type CollectionCreateOrConnectWithoutVariationInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutVariationInput, CollectionUncheckedCreateWithoutVariationInput>
  }

  export type CollectionCreateManyVariationInputEnvelope = {
    data: CollectionCreateManyVariationInput | CollectionCreateManyVariationInput[]
    skipDuplicates?: boolean
  }

  export type CurrenciesUpsertWithoutVariationsInput = {
    update: XOR<CurrenciesUpdateWithoutVariationsInput, CurrenciesUncheckedUpdateWithoutVariationsInput>
    create: XOR<CurrenciesCreateWithoutVariationsInput, CurrenciesUncheckedCreateWithoutVariationsInput>
    where?: CurrenciesWhereInput
  }

  export type CurrenciesUpdateToOneWithWhereWithoutVariationsInput = {
    where?: CurrenciesWhereInput
    data: XOR<CurrenciesUpdateWithoutVariationsInput, CurrenciesUncheckedUpdateWithoutVariationsInput>
  }

  export type CurrenciesUpdateWithoutVariationsInput = {
    ref?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: CurrencyUpdateOneRequiredWithoutCurrenciesNestedInput
    collections?: CollectionUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrenciesUncheckedUpdateWithoutVariationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    currencyId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    collections?: CollectionUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type CollectionUpsertWithWhereUniqueWithoutVariationInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutVariationInput, CollectionUncheckedUpdateWithoutVariationInput>
    create: XOR<CollectionCreateWithoutVariationInput, CollectionUncheckedCreateWithoutVariationInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutVariationInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutVariationInput, CollectionUncheckedUpdateWithoutVariationInput>
  }

  export type CollectionUpdateManyWithWhereWithoutVariationInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutVariationInput>
  }

  export type UserCreateWithoutCollectionsInput = {
    email: string
    username: string
    firstname?: string
    secondname?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: string
    role?: $Enums.Role
  }

  export type UserUncheckedCreateWithoutCollectionsInput = {
    id?: number
    email: string
    username: string
    firstname?: string
    secondname?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: string
    role?: $Enums.Role
  }

  export type UserCreateOrConnectWithoutCollectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
  }

  export type CurrenciesCreateWithoutCollectionsInput = {
    ref: string
    title: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    value: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
    currency: CurrencyCreateNestedOneWithoutCurrenciesInput
    variations?: VariationCreateNestedManyWithoutCurrenciesInput
  }

  export type CurrenciesUncheckedCreateWithoutCollectionsInput = {
    id?: number
    ref: string
    title: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    currencyId: number
    value: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
    variations?: VariationUncheckedCreateNestedManyWithoutCurrenciesInput
  }

  export type CurrenciesCreateOrConnectWithoutCollectionsInput = {
    where: CurrenciesWhereUniqueInput
    create: XOR<CurrenciesCreateWithoutCollectionsInput, CurrenciesUncheckedCreateWithoutCollectionsInput>
  }

  export type VariationCreateWithoutCollectionsInput = {
    ref: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
    currencies: CurrenciesCreateNestedOneWithoutVariationsInput
  }

  export type VariationUncheckedCreateWithoutCollectionsInput = {
    id?: number
    ref: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    currenciesId: number
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
  }

  export type VariationCreateOrConnectWithoutCollectionsInput = {
    where: VariationWhereUniqueInput
    create: XOR<VariationCreateWithoutCollectionsInput, VariationUncheckedCreateWithoutCollectionsInput>
  }

  export type UserUpsertWithoutCollectionsInput = {
    update: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserUpdateWithoutCollectionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateWithoutCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CurrenciesUpsertWithoutCollectionsInput = {
    update: XOR<CurrenciesUpdateWithoutCollectionsInput, CurrenciesUncheckedUpdateWithoutCollectionsInput>
    create: XOR<CurrenciesCreateWithoutCollectionsInput, CurrenciesUncheckedCreateWithoutCollectionsInput>
    where?: CurrenciesWhereInput
  }

  export type CurrenciesUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: CurrenciesWhereInput
    data: XOR<CurrenciesUpdateWithoutCollectionsInput, CurrenciesUncheckedUpdateWithoutCollectionsInput>
  }

  export type CurrenciesUpdateWithoutCollectionsInput = {
    ref?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: CurrencyUpdateOneRequiredWithoutCurrenciesNestedInput
    variations?: VariationUpdateManyWithoutCurrenciesNestedInput
  }

  export type CurrenciesUncheckedUpdateWithoutCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    currencyId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    variations?: VariationUncheckedUpdateManyWithoutCurrenciesNestedInput
  }

  export type VariationUpsertWithoutCollectionsInput = {
    update: XOR<VariationUpdateWithoutCollectionsInput, VariationUncheckedUpdateWithoutCollectionsInput>
    create: XOR<VariationCreateWithoutCollectionsInput, VariationUncheckedCreateWithoutCollectionsInput>
    where?: VariationWhereInput
  }

  export type VariationUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: VariationWhereInput
    data: XOR<VariationUpdateWithoutCollectionsInput, VariationUncheckedUpdateWithoutCollectionsInput>
  }

  export type VariationUpdateWithoutCollectionsInput = {
    ref?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    currencies?: CurrenciesUpdateOneRequiredWithoutVariationsNestedInput
  }

  export type VariationUncheckedUpdateWithoutCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    currenciesId?: IntFieldUpdateOperationsInput | number
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionCreateManyUserInput = {
    id?: number
    currencyId?: number | null
    variationId?: number | null
    idCategory?: number | null
    dateAdded?: Date | string
  }

  export type CollectionUpdateWithoutUserInput = {
    idCategory?: NullableIntFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: CurrenciesUpdateOneWithoutCollectionsNestedInput
    variation?: VariationUpdateOneWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    variationId?: NullableIntFieldUpdateOperationsInput | number | null
    idCategory?: NullableIntFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    variationId?: NullableIntFieldUpdateOperationsInput | number | null
    idCategory?: NullableIntFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrenciesCreateManyCurrencyInput = {
    id?: number
    ref: string
    title: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    value: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
  }

  export type CurrenciesUpdateWithoutCurrencyInput = {
    ref?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    variations?: VariationUpdateManyWithoutCurrenciesNestedInput
    collections?: CollectionUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrenciesUncheckedUpdateWithoutCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    variations?: VariationUncheckedUpdateManyWithoutCurrenciesNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrenciesUncheckedUpdateManyWithoutCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VariationCreateManyCurrenciesInput = {
    id?: number
    ref: string
    imagefront: string
    imageback: string
    description: string
    imagesignature?: string | null
    nom_des_signataire: string
    issued_by: string
    comments: string
    date?: string | null
    type?: string | null
  }

  export type CollectionCreateManyCurrencyInput = {
    id?: number
    userId: number
    variationId?: number | null
    idCategory?: number | null
    dateAdded?: Date | string
  }

  export type VariationUpdateWithoutCurrenciesInput = {
    ref?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    collections?: CollectionUpdateManyWithoutVariationNestedInput
  }

  export type VariationUncheckedUpdateWithoutCurrenciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    collections?: CollectionUncheckedUpdateManyWithoutVariationNestedInput
  }

  export type VariationUncheckedUpdateManyWithoutCurrenciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    imagefront?: StringFieldUpdateOperationsInput | string
    imageback?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagesignature?: NullableStringFieldUpdateOperationsInput | string | null
    nom_des_signataire?: StringFieldUpdateOperationsInput | string
    issued_by?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionUpdateWithoutCurrencyInput = {
    idCategory?: NullableIntFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
    variation?: VariationUpdateOneWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateWithoutCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    variationId?: NullableIntFieldUpdateOperationsInput | number | null
    idCategory?: NullableIntFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyWithoutCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    variationId?: NullableIntFieldUpdateOperationsInput | number | null
    idCategory?: NullableIntFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionCreateManyVariationInput = {
    id?: number
    userId: number
    currencyId?: number | null
    idCategory?: number | null
    dateAdded?: Date | string
  }

  export type CollectionUpdateWithoutVariationInput = {
    idCategory?: NullableIntFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
    currency?: CurrenciesUpdateOneWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateWithoutVariationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    idCategory?: NullableIntFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyWithoutVariationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    idCategory?: NullableIntFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CurrencyCountOutputTypeDefaultArgs instead
     */
    export type CurrencyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrencyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CurrenciesCountOutputTypeDefaultArgs instead
     */
    export type CurrenciesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrenciesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VariationCountOutputTypeDefaultArgs instead
     */
    export type VariationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VariationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestDefaultArgs instead
     */
    export type TestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CurrencyDefaultArgs instead
     */
    export type CurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrencyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CurrenciesDefaultArgs instead
     */
    export type CurrenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrenciesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VariationDefaultArgs instead
     */
    export type VariationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VariationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CollectionDefaultArgs instead
     */
    export type CollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CollectionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}