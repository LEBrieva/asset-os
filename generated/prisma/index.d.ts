
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Snapshot
 * 
 */
export type Snapshot = $Result.DefaultSelection<Prisma.$SnapshotPayload>
/**
 * Model ProviderSyncRun
 * 
 */
export type ProviderSyncRun = $Result.DefaultSelection<Prisma.$ProviderSyncRunPayload>
/**
 * Model AccountBalance
 * 
 */
export type AccountBalance = $Result.DefaultSelection<Prisma.$AccountBalancePayload>
/**
 * Model Position
 * 
 */
export type Position = $Result.DefaultSelection<Prisma.$PositionPayload>
/**
 * Model Transfer
 * 
 */
export type Transfer = $Result.DefaultSelection<Prisma.$TransferPayload>
/**
 * Model RawEvent
 * 
 */
export type RawEvent = $Result.DefaultSelection<Prisma.$RawEventPayload>
/**
 * Model PriceDaily
 * 
 */
export type PriceDaily = $Result.DefaultSelection<Prisma.$PriceDailyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Provider: {
  BITGET: 'BITGET',
  SIMPLEFX: 'SIMPLEFX',
  NEXO: 'NEXO'
};

export type Provider = (typeof Provider)[keyof typeof Provider]


export const SnapshotSource: {
  DAILY_CRON: 'DAILY_CRON',
  MANUAL: 'MANUAL',
  CSV_IMPORT: 'CSV_IMPORT'
};

export type SnapshotSource = (typeof SnapshotSource)[keyof typeof SnapshotSource]


export const SnapshotStatus: {
  CREATED: 'CREATED',
  RUNNING: 'RUNNING',
  PARTIAL: 'PARTIAL',
  COMPLETE: 'COMPLETE',
  FAILED: 'FAILED'
};

export type SnapshotStatus = (typeof SnapshotStatus)[keyof typeof SnapshotStatus]


export const SyncRunStatus: {
  OK: 'OK',
  ERROR: 'ERROR',
  SKIPPED: 'SKIPPED'
};

export type SyncRunStatus = (typeof SyncRunStatus)[keyof typeof SyncRunStatus]


export const PositionSide: {
  LONG: 'LONG',
  SHORT: 'SHORT'
};

export type PositionSide = (typeof PositionSide)[keyof typeof PositionSide]

}

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type SnapshotSource = $Enums.SnapshotSource

export const SnapshotSource: typeof $Enums.SnapshotSource

export type SnapshotStatus = $Enums.SnapshotStatus

export const SnapshotStatus: typeof $Enums.SnapshotStatus

export type SyncRunStatus = $Enums.SyncRunStatus

export const SyncRunStatus: typeof $Enums.SyncRunStatus

export type PositionSide = $Enums.PositionSide

export const PositionSide: typeof $Enums.PositionSide

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.snapshot`: Exposes CRUD operations for the **Snapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Snapshots
    * const snapshots = await prisma.snapshot.findMany()
    * ```
    */
  get snapshot(): Prisma.SnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerSyncRun`: Exposes CRUD operations for the **ProviderSyncRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderSyncRuns
    * const providerSyncRuns = await prisma.providerSyncRun.findMany()
    * ```
    */
  get providerSyncRun(): Prisma.ProviderSyncRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountBalance`: Exposes CRUD operations for the **AccountBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountBalances
    * const accountBalances = await prisma.accountBalance.findMany()
    * ```
    */
  get accountBalance(): Prisma.AccountBalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transfer`: Exposes CRUD operations for the **Transfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transfers
    * const transfers = await prisma.transfer.findMany()
    * ```
    */
  get transfer(): Prisma.TransferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rawEvent`: Exposes CRUD operations for the **RawEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RawEvents
    * const rawEvents = await prisma.rawEvent.findMany()
    * ```
    */
  get rawEvent(): Prisma.RawEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceDaily`: Exposes CRUD operations for the **PriceDaily** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceDailies
    * const priceDailies = await prisma.priceDaily.findMany()
    * ```
    */
  get priceDaily(): Prisma.PriceDailyDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Account: 'Account',
    Snapshot: 'Snapshot',
    ProviderSyncRun: 'ProviderSyncRun',
    AccountBalance: 'AccountBalance',
    Position: 'Position',
    Transfer: 'Transfer',
    RawEvent: 'RawEvent',
    PriceDaily: 'PriceDaily'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "snapshot" | "providerSyncRun" | "accountBalance" | "position" | "transfer" | "rawEvent" | "priceDaily"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Snapshot: {
        payload: Prisma.$SnapshotPayload<ExtArgs>
        fields: Prisma.SnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          findFirst: {
            args: Prisma.SnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          findMany: {
            args: Prisma.SnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>[]
          }
          create: {
            args: Prisma.SnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          createMany: {
            args: Prisma.SnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>[]
          }
          delete: {
            args: Prisma.SnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          update: {
            args: Prisma.SnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          deleteMany: {
            args: Prisma.SnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>[]
          }
          upsert: {
            args: Prisma.SnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          aggregate: {
            args: Prisma.SnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSnapshot>
          }
          groupBy: {
            args: Prisma.SnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<SnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.SnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<SnapshotCountAggregateOutputType> | number
          }
        }
      }
      ProviderSyncRun: {
        payload: Prisma.$ProviderSyncRunPayload<ExtArgs>
        fields: Prisma.ProviderSyncRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderSyncRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderSyncRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncRunPayload>
          }
          findFirst: {
            args: Prisma.ProviderSyncRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderSyncRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncRunPayload>
          }
          findMany: {
            args: Prisma.ProviderSyncRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncRunPayload>[]
          }
          create: {
            args: Prisma.ProviderSyncRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncRunPayload>
          }
          createMany: {
            args: Prisma.ProviderSyncRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderSyncRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncRunPayload>[]
          }
          delete: {
            args: Prisma.ProviderSyncRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncRunPayload>
          }
          update: {
            args: Prisma.ProviderSyncRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncRunPayload>
          }
          deleteMany: {
            args: Prisma.ProviderSyncRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderSyncRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderSyncRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncRunPayload>[]
          }
          upsert: {
            args: Prisma.ProviderSyncRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncRunPayload>
          }
          aggregate: {
            args: Prisma.ProviderSyncRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderSyncRun>
          }
          groupBy: {
            args: Prisma.ProviderSyncRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderSyncRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderSyncRunCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderSyncRunCountAggregateOutputType> | number
          }
        }
      }
      AccountBalance: {
        payload: Prisma.$AccountBalancePayload<ExtArgs>
        fields: Prisma.AccountBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountBalancePayload>
          }
          findFirst: {
            args: Prisma.AccountBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountBalancePayload>
          }
          findMany: {
            args: Prisma.AccountBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountBalancePayload>[]
          }
          create: {
            args: Prisma.AccountBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountBalancePayload>
          }
          createMany: {
            args: Prisma.AccountBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountBalancePayload>[]
          }
          delete: {
            args: Prisma.AccountBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountBalancePayload>
          }
          update: {
            args: Prisma.AccountBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountBalancePayload>
          }
          deleteMany: {
            args: Prisma.AccountBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountBalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountBalancePayload>[]
          }
          upsert: {
            args: Prisma.AccountBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountBalancePayload>
          }
          aggregate: {
            args: Prisma.AccountBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountBalance>
          }
          groupBy: {
            args: Prisma.AccountBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<AccountBalanceCountAggregateOutputType> | number
          }
        }
      }
      Position: {
        payload: Prisma.$PositionPayload<ExtArgs>
        fields: Prisma.PositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findFirst: {
            args: Prisma.PositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findMany: {
            args: Prisma.PositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          create: {
            args: Prisma.PositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          createMany: {
            args: Prisma.PositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          delete: {
            args: Prisma.PositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          update: {
            args: Prisma.PositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          deleteMany: {
            args: Prisma.PositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          upsert: {
            args: Prisma.PositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.PositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionCountArgs<ExtArgs>
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
      Transfer: {
        payload: Prisma.$TransferPayload<ExtArgs>
        fields: Prisma.TransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          findFirst: {
            args: Prisma.TransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          findMany: {
            args: Prisma.TransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>[]
          }
          create: {
            args: Prisma.TransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          createMany: {
            args: Prisma.TransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>[]
          }
          delete: {
            args: Prisma.TransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          update: {
            args: Prisma.TransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          deleteMany: {
            args: Prisma.TransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>[]
          }
          upsert: {
            args: Prisma.TransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          aggregate: {
            args: Prisma.TransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransfer>
          }
          groupBy: {
            args: Prisma.TransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransferCountArgs<ExtArgs>
            result: $Utils.Optional<TransferCountAggregateOutputType> | number
          }
        }
      }
      RawEvent: {
        payload: Prisma.$RawEventPayload<ExtArgs>
        fields: Prisma.RawEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RawEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RawEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          findFirst: {
            args: Prisma.RawEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RawEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          findMany: {
            args: Prisma.RawEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>[]
          }
          create: {
            args: Prisma.RawEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          createMany: {
            args: Prisma.RawEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RawEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>[]
          }
          delete: {
            args: Prisma.RawEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          update: {
            args: Prisma.RawEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          deleteMany: {
            args: Prisma.RawEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RawEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RawEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>[]
          }
          upsert: {
            args: Prisma.RawEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          aggregate: {
            args: Prisma.RawEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRawEvent>
          }
          groupBy: {
            args: Prisma.RawEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<RawEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.RawEventCountArgs<ExtArgs>
            result: $Utils.Optional<RawEventCountAggregateOutputType> | number
          }
        }
      }
      PriceDaily: {
        payload: Prisma.$PriceDailyPayload<ExtArgs>
        fields: Prisma.PriceDailyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceDailyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceDailyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceDailyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceDailyPayload>
          }
          findFirst: {
            args: Prisma.PriceDailyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceDailyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceDailyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceDailyPayload>
          }
          findMany: {
            args: Prisma.PriceDailyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceDailyPayload>[]
          }
          create: {
            args: Prisma.PriceDailyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceDailyPayload>
          }
          createMany: {
            args: Prisma.PriceDailyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceDailyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceDailyPayload>[]
          }
          delete: {
            args: Prisma.PriceDailyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceDailyPayload>
          }
          update: {
            args: Prisma.PriceDailyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceDailyPayload>
          }
          deleteMany: {
            args: Prisma.PriceDailyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceDailyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceDailyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceDailyPayload>[]
          }
          upsert: {
            args: Prisma.PriceDailyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceDailyPayload>
          }
          aggregate: {
            args: Prisma.PriceDailyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceDaily>
          }
          groupBy: {
            args: Prisma.PriceDailyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceDailyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceDailyCountArgs<ExtArgs>
            result: $Utils.Optional<PriceDailyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    snapshot?: SnapshotOmit
    providerSyncRun?: ProviderSyncRunOmit
    accountBalance?: AccountBalanceOmit
    position?: PositionOmit
    transfer?: TransferOmit
    rawEvent?: RawEventOmit
    priceDaily?: PriceDailyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    balances: number
    positions: number
    transfersFrom: number
    transfersTo: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balances?: boolean | AccountCountOutputTypeCountBalancesArgs
    positions?: boolean | AccountCountOutputTypeCountPositionsArgs
    transfersFrom?: boolean | AccountCountOutputTypeCountTransfersFromArgs
    transfersTo?: boolean | AccountCountOutputTypeCountTransfersToArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountBalanceWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountPositionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTransfersFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTransfersToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferWhereInput
  }


  /**
   * Count Type SnapshotCountOutputType
   */

  export type SnapshotCountOutputType = {
    providerSyncRuns: number
    balances: number
    positions: number
    rawEvents: number
  }

  export type SnapshotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providerSyncRuns?: boolean | SnapshotCountOutputTypeCountProviderSyncRunsArgs
    balances?: boolean | SnapshotCountOutputTypeCountBalancesArgs
    positions?: boolean | SnapshotCountOutputTypeCountPositionsArgs
    rawEvents?: boolean | SnapshotCountOutputTypeCountRawEventsArgs
  }

  // Custom InputTypes
  /**
   * SnapshotCountOutputType without action
   */
  export type SnapshotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotCountOutputType
     */
    select?: SnapshotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SnapshotCountOutputType without action
   */
  export type SnapshotCountOutputTypeCountProviderSyncRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderSyncRunWhereInput
  }

  /**
   * SnapshotCountOutputType without action
   */
  export type SnapshotCountOutputTypeCountBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountBalanceWhereInput
  }

  /**
   * SnapshotCountOutputType without action
   */
  export type SnapshotCountOutputTypeCountPositionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
  }

  /**
   * SnapshotCountOutputType without action
   */
  export type SnapshotCountOutputTypeCountRawEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    provider: $Enums.Provider | null
    label: string | null
    baseCurrency: string | null
    createdAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    provider: $Enums.Provider | null
    label: string | null
    baseCurrency: string | null
    createdAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    provider: number
    label: number
    baseCurrency: number
    createdAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    provider?: true
    label?: true
    baseCurrency?: true
    createdAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    provider?: true
    label?: true
    baseCurrency?: true
    createdAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    provider?: true
    label?: true
    baseCurrency?: true
    createdAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    provider: $Enums.Provider
    label: string
    baseCurrency: string
    createdAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    label?: boolean
    baseCurrency?: boolean
    createdAt?: boolean
    balances?: boolean | Account$balancesArgs<ExtArgs>
    positions?: boolean | Account$positionsArgs<ExtArgs>
    transfersFrom?: boolean | Account$transfersFromArgs<ExtArgs>
    transfersTo?: boolean | Account$transfersToArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    label?: boolean
    baseCurrency?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    label?: boolean
    baseCurrency?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    provider?: boolean
    label?: boolean
    baseCurrency?: boolean
    createdAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "label" | "baseCurrency" | "createdAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balances?: boolean | Account$balancesArgs<ExtArgs>
    positions?: boolean | Account$positionsArgs<ExtArgs>
    transfersFrom?: boolean | Account$transfersFromArgs<ExtArgs>
    transfersTo?: boolean | Account$transfersToArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      balances: Prisma.$AccountBalancePayload<ExtArgs>[]
      positions: Prisma.$PositionPayload<ExtArgs>[]
      transfersFrom: Prisma.$TransferPayload<ExtArgs>[]
      transfersTo: Prisma.$TransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: $Enums.Provider
      label: string
      baseCurrency: string
      createdAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    balances<T extends Account$balancesArgs<ExtArgs> = {}>(args?: Subset<T, Account$balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    positions<T extends Account$positionsArgs<ExtArgs> = {}>(args?: Subset<T, Account$positionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transfersFrom<T extends Account$transfersFromArgs<ExtArgs> = {}>(args?: Subset<T, Account$transfersFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transfersTo<T extends Account$transfersToArgs<ExtArgs> = {}>(args?: Subset<T, Account$transfersToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'Provider'>
    readonly label: FieldRef<"Account", 'String'>
    readonly baseCurrency: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.balances
   */
  export type Account$balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceInclude<ExtArgs> | null
    where?: AccountBalanceWhereInput
    orderBy?: AccountBalanceOrderByWithRelationInput | AccountBalanceOrderByWithRelationInput[]
    cursor?: AccountBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountBalanceScalarFieldEnum | AccountBalanceScalarFieldEnum[]
  }

  /**
   * Account.positions
   */
  export type Account$positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    cursor?: PositionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Account.transfersFrom
   */
  export type Account$transfersFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    where?: TransferWhereInput
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    cursor?: TransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * Account.transfersTo
   */
  export type Account$transfersToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    where?: TransferWhereInput
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    cursor?: TransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Snapshot
   */

  export type AggregateSnapshot = {
    _count: SnapshotCountAggregateOutputType | null
    _min: SnapshotMinAggregateOutputType | null
    _max: SnapshotMaxAggregateOutputType | null
  }

  export type SnapshotMinAggregateOutputType = {
    id: string | null
    snapshotDate: Date | null
    createdAt: Date | null
    source: $Enums.SnapshotSource | null
    status: $Enums.SnapshotStatus | null
    notes: string | null
  }

  export type SnapshotMaxAggregateOutputType = {
    id: string | null
    snapshotDate: Date | null
    createdAt: Date | null
    source: $Enums.SnapshotSource | null
    status: $Enums.SnapshotStatus | null
    notes: string | null
  }

  export type SnapshotCountAggregateOutputType = {
    id: number
    snapshotDate: number
    createdAt: number
    source: number
    status: number
    notes: number
    _all: number
  }


  export type SnapshotMinAggregateInputType = {
    id?: true
    snapshotDate?: true
    createdAt?: true
    source?: true
    status?: true
    notes?: true
  }

  export type SnapshotMaxAggregateInputType = {
    id?: true
    snapshotDate?: true
    createdAt?: true
    source?: true
    status?: true
    notes?: true
  }

  export type SnapshotCountAggregateInputType = {
    id?: true
    snapshotDate?: true
    createdAt?: true
    source?: true
    status?: true
    notes?: true
    _all?: true
  }

  export type SnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Snapshot to aggregate.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Snapshots
    **/
    _count?: true | SnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnapshotMaxAggregateInputType
  }

  export type GetSnapshotAggregateType<T extends SnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSnapshot[P]>
      : GetScalarType<T[P], AggregateSnapshot[P]>
  }




  export type SnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnapshotWhereInput
    orderBy?: SnapshotOrderByWithAggregationInput | SnapshotOrderByWithAggregationInput[]
    by: SnapshotScalarFieldEnum[] | SnapshotScalarFieldEnum
    having?: SnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnapshotCountAggregateInputType | true
    _min?: SnapshotMinAggregateInputType
    _max?: SnapshotMaxAggregateInputType
  }

  export type SnapshotGroupByOutputType = {
    id: string
    snapshotDate: Date
    createdAt: Date
    source: $Enums.SnapshotSource
    status: $Enums.SnapshotStatus
    notes: string | null
    _count: SnapshotCountAggregateOutputType | null
    _min: SnapshotMinAggregateOutputType | null
    _max: SnapshotMaxAggregateOutputType | null
  }

  type GetSnapshotGroupByPayload<T extends SnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], SnapshotGroupByOutputType[P]>
        }
      >
    >


  export type SnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snapshotDate?: boolean
    createdAt?: boolean
    source?: boolean
    status?: boolean
    notes?: boolean
    providerSyncRuns?: boolean | Snapshot$providerSyncRunsArgs<ExtArgs>
    balances?: boolean | Snapshot$balancesArgs<ExtArgs>
    positions?: boolean | Snapshot$positionsArgs<ExtArgs>
    rawEvents?: boolean | Snapshot$rawEventsArgs<ExtArgs>
    _count?: boolean | SnapshotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snapshot"]>

  export type SnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snapshotDate?: boolean
    createdAt?: boolean
    source?: boolean
    status?: boolean
    notes?: boolean
  }, ExtArgs["result"]["snapshot"]>

  export type SnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snapshotDate?: boolean
    createdAt?: boolean
    source?: boolean
    status?: boolean
    notes?: boolean
  }, ExtArgs["result"]["snapshot"]>

  export type SnapshotSelectScalar = {
    id?: boolean
    snapshotDate?: boolean
    createdAt?: boolean
    source?: boolean
    status?: boolean
    notes?: boolean
  }

  export type SnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "snapshotDate" | "createdAt" | "source" | "status" | "notes", ExtArgs["result"]["snapshot"]>
  export type SnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providerSyncRuns?: boolean | Snapshot$providerSyncRunsArgs<ExtArgs>
    balances?: boolean | Snapshot$balancesArgs<ExtArgs>
    positions?: boolean | Snapshot$positionsArgs<ExtArgs>
    rawEvents?: boolean | Snapshot$rawEventsArgs<ExtArgs>
    _count?: boolean | SnapshotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Snapshot"
    objects: {
      providerSyncRuns: Prisma.$ProviderSyncRunPayload<ExtArgs>[]
      balances: Prisma.$AccountBalancePayload<ExtArgs>[]
      positions: Prisma.$PositionPayload<ExtArgs>[]
      rawEvents: Prisma.$RawEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      snapshotDate: Date
      createdAt: Date
      source: $Enums.SnapshotSource
      status: $Enums.SnapshotStatus
      notes: string | null
    }, ExtArgs["result"]["snapshot"]>
    composites: {}
  }

  type SnapshotGetPayload<S extends boolean | null | undefined | SnapshotDefaultArgs> = $Result.GetResult<Prisma.$SnapshotPayload, S>

  type SnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SnapshotCountAggregateInputType | true
    }

  export interface SnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Snapshot'], meta: { name: 'Snapshot' } }
    /**
     * Find zero or one Snapshot that matches the filter.
     * @param {SnapshotFindUniqueArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SnapshotFindUniqueArgs>(args: SelectSubset<T, SnapshotFindUniqueArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Snapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SnapshotFindUniqueOrThrowArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, SnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Snapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFindFirstArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SnapshotFindFirstArgs>(args?: SelectSubset<T, SnapshotFindFirstArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Snapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFindFirstOrThrowArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, SnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Snapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Snapshots
     * const snapshots = await prisma.snapshot.findMany()
     * 
     * // Get first 10 Snapshots
     * const snapshots = await prisma.snapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const snapshotWithIdOnly = await prisma.snapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SnapshotFindManyArgs>(args?: SelectSubset<T, SnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Snapshot.
     * @param {SnapshotCreateArgs} args - Arguments to create a Snapshot.
     * @example
     * // Create one Snapshot
     * const Snapshot = await prisma.snapshot.create({
     *   data: {
     *     // ... data to create a Snapshot
     *   }
     * })
     * 
     */
    create<T extends SnapshotCreateArgs>(args: SelectSubset<T, SnapshotCreateArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Snapshots.
     * @param {SnapshotCreateManyArgs} args - Arguments to create many Snapshots.
     * @example
     * // Create many Snapshots
     * const snapshot = await prisma.snapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SnapshotCreateManyArgs>(args?: SelectSubset<T, SnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Snapshots and returns the data saved in the database.
     * @param {SnapshotCreateManyAndReturnArgs} args - Arguments to create many Snapshots.
     * @example
     * // Create many Snapshots
     * const snapshot = await prisma.snapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Snapshots and only return the `id`
     * const snapshotWithIdOnly = await prisma.snapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, SnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Snapshot.
     * @param {SnapshotDeleteArgs} args - Arguments to delete one Snapshot.
     * @example
     * // Delete one Snapshot
     * const Snapshot = await prisma.snapshot.delete({
     *   where: {
     *     // ... filter to delete one Snapshot
     *   }
     * })
     * 
     */
    delete<T extends SnapshotDeleteArgs>(args: SelectSubset<T, SnapshotDeleteArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Snapshot.
     * @param {SnapshotUpdateArgs} args - Arguments to update one Snapshot.
     * @example
     * // Update one Snapshot
     * const snapshot = await prisma.snapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SnapshotUpdateArgs>(args: SelectSubset<T, SnapshotUpdateArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Snapshots.
     * @param {SnapshotDeleteManyArgs} args - Arguments to filter Snapshots to delete.
     * @example
     * // Delete a few Snapshots
     * const { count } = await prisma.snapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SnapshotDeleteManyArgs>(args?: SelectSubset<T, SnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Snapshots
     * const snapshot = await prisma.snapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SnapshotUpdateManyArgs>(args: SelectSubset<T, SnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Snapshots and returns the data updated in the database.
     * @param {SnapshotUpdateManyAndReturnArgs} args - Arguments to update many Snapshots.
     * @example
     * // Update many Snapshots
     * const snapshot = await prisma.snapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Snapshots and only return the `id`
     * const snapshotWithIdOnly = await prisma.snapshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, SnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Snapshot.
     * @param {SnapshotUpsertArgs} args - Arguments to update or create a Snapshot.
     * @example
     * // Update or create a Snapshot
     * const snapshot = await prisma.snapshot.upsert({
     *   create: {
     *     // ... data to create a Snapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Snapshot we want to update
     *   }
     * })
     */
    upsert<T extends SnapshotUpsertArgs>(args: SelectSubset<T, SnapshotUpsertArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotCountArgs} args - Arguments to filter Snapshots to count.
     * @example
     * // Count the number of Snapshots
     * const count = await prisma.snapshot.count({
     *   where: {
     *     // ... the filter for the Snapshots we want to count
     *   }
     * })
    **/
    count<T extends SnapshotCountArgs>(
      args?: Subset<T, SnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Snapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SnapshotAggregateArgs>(args: Subset<T, SnapshotAggregateArgs>): Prisma.PrismaPromise<GetSnapshotAggregateType<T>>

    /**
     * Group by Snapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotGroupByArgs} args - Group by arguments.
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
      T extends SnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SnapshotGroupByArgs['orderBy'] }
        : { orderBy?: SnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Snapshot model
   */
  readonly fields: SnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Snapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    providerSyncRuns<T extends Snapshot$providerSyncRunsArgs<ExtArgs> = {}>(args?: Subset<T, Snapshot$providerSyncRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderSyncRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    balances<T extends Snapshot$balancesArgs<ExtArgs> = {}>(args?: Subset<T, Snapshot$balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    positions<T extends Snapshot$positionsArgs<ExtArgs> = {}>(args?: Subset<T, Snapshot$positionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rawEvents<T extends Snapshot$rawEventsArgs<ExtArgs> = {}>(args?: Subset<T, Snapshot$rawEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Snapshot model
   */
  interface SnapshotFieldRefs {
    readonly id: FieldRef<"Snapshot", 'String'>
    readonly snapshotDate: FieldRef<"Snapshot", 'DateTime'>
    readonly createdAt: FieldRef<"Snapshot", 'DateTime'>
    readonly source: FieldRef<"Snapshot", 'SnapshotSource'>
    readonly status: FieldRef<"Snapshot", 'SnapshotStatus'>
    readonly notes: FieldRef<"Snapshot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Snapshot findUnique
   */
  export type SnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where: SnapshotWhereUniqueInput
  }

  /**
   * Snapshot findUniqueOrThrow
   */
  export type SnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where: SnapshotWhereUniqueInput
  }

  /**
   * Snapshot findFirst
   */
  export type SnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Snapshots.
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snapshots.
     */
    distinct?: SnapshotScalarFieldEnum | SnapshotScalarFieldEnum[]
  }

  /**
   * Snapshot findFirstOrThrow
   */
  export type SnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Snapshots.
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snapshots.
     */
    distinct?: SnapshotScalarFieldEnum | SnapshotScalarFieldEnum[]
  }

  /**
   * Snapshot findMany
   */
  export type SnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshots to fetch.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Snapshots.
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    distinct?: SnapshotScalarFieldEnum | SnapshotScalarFieldEnum[]
  }

  /**
   * Snapshot create
   */
  export type SnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a Snapshot.
     */
    data: XOR<SnapshotCreateInput, SnapshotUncheckedCreateInput>
  }

  /**
   * Snapshot createMany
   */
  export type SnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Snapshots.
     */
    data: SnapshotCreateManyInput | SnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Snapshot createManyAndReturn
   */
  export type SnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many Snapshots.
     */
    data: SnapshotCreateManyInput | SnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Snapshot update
   */
  export type SnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a Snapshot.
     */
    data: XOR<SnapshotUpdateInput, SnapshotUncheckedUpdateInput>
    /**
     * Choose, which Snapshot to update.
     */
    where: SnapshotWhereUniqueInput
  }

  /**
   * Snapshot updateMany
   */
  export type SnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Snapshots.
     */
    data: XOR<SnapshotUpdateManyMutationInput, SnapshotUncheckedUpdateManyInput>
    /**
     * Filter which Snapshots to update
     */
    where?: SnapshotWhereInput
    /**
     * Limit how many Snapshots to update.
     */
    limit?: number
  }

  /**
   * Snapshot updateManyAndReturn
   */
  export type SnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * The data used to update Snapshots.
     */
    data: XOR<SnapshotUpdateManyMutationInput, SnapshotUncheckedUpdateManyInput>
    /**
     * Filter which Snapshots to update
     */
    where?: SnapshotWhereInput
    /**
     * Limit how many Snapshots to update.
     */
    limit?: number
  }

  /**
   * Snapshot upsert
   */
  export type SnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the Snapshot to update in case it exists.
     */
    where: SnapshotWhereUniqueInput
    /**
     * In case the Snapshot found by the `where` argument doesn't exist, create a new Snapshot with this data.
     */
    create: XOR<SnapshotCreateInput, SnapshotUncheckedCreateInput>
    /**
     * In case the Snapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SnapshotUpdateInput, SnapshotUncheckedUpdateInput>
  }

  /**
   * Snapshot delete
   */
  export type SnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter which Snapshot to delete.
     */
    where: SnapshotWhereUniqueInput
  }

  /**
   * Snapshot deleteMany
   */
  export type SnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Snapshots to delete
     */
    where?: SnapshotWhereInput
    /**
     * Limit how many Snapshots to delete.
     */
    limit?: number
  }

  /**
   * Snapshot.providerSyncRuns
   */
  export type Snapshot$providerSyncRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncRun
     */
    select?: ProviderSyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderSyncRun
     */
    omit?: ProviderSyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderSyncRunInclude<ExtArgs> | null
    where?: ProviderSyncRunWhereInput
    orderBy?: ProviderSyncRunOrderByWithRelationInput | ProviderSyncRunOrderByWithRelationInput[]
    cursor?: ProviderSyncRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderSyncRunScalarFieldEnum | ProviderSyncRunScalarFieldEnum[]
  }

  /**
   * Snapshot.balances
   */
  export type Snapshot$balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceInclude<ExtArgs> | null
    where?: AccountBalanceWhereInput
    orderBy?: AccountBalanceOrderByWithRelationInput | AccountBalanceOrderByWithRelationInput[]
    cursor?: AccountBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountBalanceScalarFieldEnum | AccountBalanceScalarFieldEnum[]
  }

  /**
   * Snapshot.positions
   */
  export type Snapshot$positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    cursor?: PositionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Snapshot.rawEvents
   */
  export type Snapshot$rawEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawEvent
     */
    omit?: RawEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    where?: RawEventWhereInput
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    cursor?: RawEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RawEventScalarFieldEnum | RawEventScalarFieldEnum[]
  }

  /**
   * Snapshot without action
   */
  export type SnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
  }


  /**
   * Model ProviderSyncRun
   */

  export type AggregateProviderSyncRun = {
    _count: ProviderSyncRunCountAggregateOutputType | null
    _min: ProviderSyncRunMinAggregateOutputType | null
    _max: ProviderSyncRunMaxAggregateOutputType | null
  }

  export type ProviderSyncRunMinAggregateOutputType = {
    id: string | null
    snapshotId: string | null
    provider: $Enums.Provider | null
    startedAt: Date | null
    finishedAt: Date | null
    status: $Enums.SyncRunStatus | null
    errorMessage: string | null
  }

  export type ProviderSyncRunMaxAggregateOutputType = {
    id: string | null
    snapshotId: string | null
    provider: $Enums.Provider | null
    startedAt: Date | null
    finishedAt: Date | null
    status: $Enums.SyncRunStatus | null
    errorMessage: string | null
  }

  export type ProviderSyncRunCountAggregateOutputType = {
    id: number
    snapshotId: number
    provider: number
    startedAt: number
    finishedAt: number
    status: number
    errorMessage: number
    _all: number
  }


  export type ProviderSyncRunMinAggregateInputType = {
    id?: true
    snapshotId?: true
    provider?: true
    startedAt?: true
    finishedAt?: true
    status?: true
    errorMessage?: true
  }

  export type ProviderSyncRunMaxAggregateInputType = {
    id?: true
    snapshotId?: true
    provider?: true
    startedAt?: true
    finishedAt?: true
    status?: true
    errorMessage?: true
  }

  export type ProviderSyncRunCountAggregateInputType = {
    id?: true
    snapshotId?: true
    provider?: true
    startedAt?: true
    finishedAt?: true
    status?: true
    errorMessage?: true
    _all?: true
  }

  export type ProviderSyncRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderSyncRun to aggregate.
     */
    where?: ProviderSyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderSyncRuns to fetch.
     */
    orderBy?: ProviderSyncRunOrderByWithRelationInput | ProviderSyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderSyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderSyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderSyncRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderSyncRuns
    **/
    _count?: true | ProviderSyncRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderSyncRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderSyncRunMaxAggregateInputType
  }

  export type GetProviderSyncRunAggregateType<T extends ProviderSyncRunAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderSyncRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderSyncRun[P]>
      : GetScalarType<T[P], AggregateProviderSyncRun[P]>
  }




  export type ProviderSyncRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderSyncRunWhereInput
    orderBy?: ProviderSyncRunOrderByWithAggregationInput | ProviderSyncRunOrderByWithAggregationInput[]
    by: ProviderSyncRunScalarFieldEnum[] | ProviderSyncRunScalarFieldEnum
    having?: ProviderSyncRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderSyncRunCountAggregateInputType | true
    _min?: ProviderSyncRunMinAggregateInputType
    _max?: ProviderSyncRunMaxAggregateInputType
  }

  export type ProviderSyncRunGroupByOutputType = {
    id: string
    snapshotId: string
    provider: $Enums.Provider
    startedAt: Date
    finishedAt: Date | null
    status: $Enums.SyncRunStatus
    errorMessage: string | null
    _count: ProviderSyncRunCountAggregateOutputType | null
    _min: ProviderSyncRunMinAggregateOutputType | null
    _max: ProviderSyncRunMaxAggregateOutputType | null
  }

  type GetProviderSyncRunGroupByPayload<T extends ProviderSyncRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderSyncRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderSyncRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderSyncRunGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderSyncRunGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSyncRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snapshotId?: boolean
    provider?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    errorMessage?: boolean
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerSyncRun"]>

  export type ProviderSyncRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snapshotId?: boolean
    provider?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    errorMessage?: boolean
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerSyncRun"]>

  export type ProviderSyncRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snapshotId?: boolean
    provider?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    errorMessage?: boolean
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerSyncRun"]>

  export type ProviderSyncRunSelectScalar = {
    id?: boolean
    snapshotId?: boolean
    provider?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    errorMessage?: boolean
  }

  export type ProviderSyncRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "snapshotId" | "provider" | "startedAt" | "finishedAt" | "status" | "errorMessage", ExtArgs["result"]["providerSyncRun"]>
  export type ProviderSyncRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }
  export type ProviderSyncRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }
  export type ProviderSyncRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }

  export type $ProviderSyncRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderSyncRun"
    objects: {
      snapshot: Prisma.$SnapshotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      snapshotId: string
      provider: $Enums.Provider
      startedAt: Date
      finishedAt: Date | null
      status: $Enums.SyncRunStatus
      errorMessage: string | null
    }, ExtArgs["result"]["providerSyncRun"]>
    composites: {}
  }

  type ProviderSyncRunGetPayload<S extends boolean | null | undefined | ProviderSyncRunDefaultArgs> = $Result.GetResult<Prisma.$ProviderSyncRunPayload, S>

  type ProviderSyncRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderSyncRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderSyncRunCountAggregateInputType | true
    }

  export interface ProviderSyncRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderSyncRun'], meta: { name: 'ProviderSyncRun' } }
    /**
     * Find zero or one ProviderSyncRun that matches the filter.
     * @param {ProviderSyncRunFindUniqueArgs} args - Arguments to find a ProviderSyncRun
     * @example
     * // Get one ProviderSyncRun
     * const providerSyncRun = await prisma.providerSyncRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderSyncRunFindUniqueArgs>(args: SelectSubset<T, ProviderSyncRunFindUniqueArgs<ExtArgs>>): Prisma__ProviderSyncRunClient<$Result.GetResult<Prisma.$ProviderSyncRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderSyncRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderSyncRunFindUniqueOrThrowArgs} args - Arguments to find a ProviderSyncRun
     * @example
     * // Get one ProviderSyncRun
     * const providerSyncRun = await prisma.providerSyncRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderSyncRunFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderSyncRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderSyncRunClient<$Result.GetResult<Prisma.$ProviderSyncRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderSyncRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncRunFindFirstArgs} args - Arguments to find a ProviderSyncRun
     * @example
     * // Get one ProviderSyncRun
     * const providerSyncRun = await prisma.providerSyncRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderSyncRunFindFirstArgs>(args?: SelectSubset<T, ProviderSyncRunFindFirstArgs<ExtArgs>>): Prisma__ProviderSyncRunClient<$Result.GetResult<Prisma.$ProviderSyncRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderSyncRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncRunFindFirstOrThrowArgs} args - Arguments to find a ProviderSyncRun
     * @example
     * // Get one ProviderSyncRun
     * const providerSyncRun = await prisma.providerSyncRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderSyncRunFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderSyncRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderSyncRunClient<$Result.GetResult<Prisma.$ProviderSyncRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderSyncRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderSyncRuns
     * const providerSyncRuns = await prisma.providerSyncRun.findMany()
     * 
     * // Get first 10 ProviderSyncRuns
     * const providerSyncRuns = await prisma.providerSyncRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerSyncRunWithIdOnly = await prisma.providerSyncRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderSyncRunFindManyArgs>(args?: SelectSubset<T, ProviderSyncRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderSyncRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderSyncRun.
     * @param {ProviderSyncRunCreateArgs} args - Arguments to create a ProviderSyncRun.
     * @example
     * // Create one ProviderSyncRun
     * const ProviderSyncRun = await prisma.providerSyncRun.create({
     *   data: {
     *     // ... data to create a ProviderSyncRun
     *   }
     * })
     * 
     */
    create<T extends ProviderSyncRunCreateArgs>(args: SelectSubset<T, ProviderSyncRunCreateArgs<ExtArgs>>): Prisma__ProviderSyncRunClient<$Result.GetResult<Prisma.$ProviderSyncRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderSyncRuns.
     * @param {ProviderSyncRunCreateManyArgs} args - Arguments to create many ProviderSyncRuns.
     * @example
     * // Create many ProviderSyncRuns
     * const providerSyncRun = await prisma.providerSyncRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderSyncRunCreateManyArgs>(args?: SelectSubset<T, ProviderSyncRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderSyncRuns and returns the data saved in the database.
     * @param {ProviderSyncRunCreateManyAndReturnArgs} args - Arguments to create many ProviderSyncRuns.
     * @example
     * // Create many ProviderSyncRuns
     * const providerSyncRun = await prisma.providerSyncRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderSyncRuns and only return the `id`
     * const providerSyncRunWithIdOnly = await prisma.providerSyncRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderSyncRunCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderSyncRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderSyncRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderSyncRun.
     * @param {ProviderSyncRunDeleteArgs} args - Arguments to delete one ProviderSyncRun.
     * @example
     * // Delete one ProviderSyncRun
     * const ProviderSyncRun = await prisma.providerSyncRun.delete({
     *   where: {
     *     // ... filter to delete one ProviderSyncRun
     *   }
     * })
     * 
     */
    delete<T extends ProviderSyncRunDeleteArgs>(args: SelectSubset<T, ProviderSyncRunDeleteArgs<ExtArgs>>): Prisma__ProviderSyncRunClient<$Result.GetResult<Prisma.$ProviderSyncRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderSyncRun.
     * @param {ProviderSyncRunUpdateArgs} args - Arguments to update one ProviderSyncRun.
     * @example
     * // Update one ProviderSyncRun
     * const providerSyncRun = await prisma.providerSyncRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderSyncRunUpdateArgs>(args: SelectSubset<T, ProviderSyncRunUpdateArgs<ExtArgs>>): Prisma__ProviderSyncRunClient<$Result.GetResult<Prisma.$ProviderSyncRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderSyncRuns.
     * @param {ProviderSyncRunDeleteManyArgs} args - Arguments to filter ProviderSyncRuns to delete.
     * @example
     * // Delete a few ProviderSyncRuns
     * const { count } = await prisma.providerSyncRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderSyncRunDeleteManyArgs>(args?: SelectSubset<T, ProviderSyncRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderSyncRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderSyncRuns
     * const providerSyncRun = await prisma.providerSyncRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderSyncRunUpdateManyArgs>(args: SelectSubset<T, ProviderSyncRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderSyncRuns and returns the data updated in the database.
     * @param {ProviderSyncRunUpdateManyAndReturnArgs} args - Arguments to update many ProviderSyncRuns.
     * @example
     * // Update many ProviderSyncRuns
     * const providerSyncRun = await prisma.providerSyncRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderSyncRuns and only return the `id`
     * const providerSyncRunWithIdOnly = await prisma.providerSyncRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderSyncRunUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderSyncRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderSyncRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderSyncRun.
     * @param {ProviderSyncRunUpsertArgs} args - Arguments to update or create a ProviderSyncRun.
     * @example
     * // Update or create a ProviderSyncRun
     * const providerSyncRun = await prisma.providerSyncRun.upsert({
     *   create: {
     *     // ... data to create a ProviderSyncRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderSyncRun we want to update
     *   }
     * })
     */
    upsert<T extends ProviderSyncRunUpsertArgs>(args: SelectSubset<T, ProviderSyncRunUpsertArgs<ExtArgs>>): Prisma__ProviderSyncRunClient<$Result.GetResult<Prisma.$ProviderSyncRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderSyncRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncRunCountArgs} args - Arguments to filter ProviderSyncRuns to count.
     * @example
     * // Count the number of ProviderSyncRuns
     * const count = await prisma.providerSyncRun.count({
     *   where: {
     *     // ... the filter for the ProviderSyncRuns we want to count
     *   }
     * })
    **/
    count<T extends ProviderSyncRunCountArgs>(
      args?: Subset<T, ProviderSyncRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderSyncRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderSyncRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderSyncRunAggregateArgs>(args: Subset<T, ProviderSyncRunAggregateArgs>): Prisma.PrismaPromise<GetProviderSyncRunAggregateType<T>>

    /**
     * Group by ProviderSyncRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncRunGroupByArgs} args - Group by arguments.
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
      T extends ProviderSyncRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderSyncRunGroupByArgs['orderBy'] }
        : { orderBy?: ProviderSyncRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProviderSyncRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderSyncRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderSyncRun model
   */
  readonly fields: ProviderSyncRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderSyncRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderSyncRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    snapshot<T extends SnapshotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SnapshotDefaultArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProviderSyncRun model
   */
  interface ProviderSyncRunFieldRefs {
    readonly id: FieldRef<"ProviderSyncRun", 'String'>
    readonly snapshotId: FieldRef<"ProviderSyncRun", 'String'>
    readonly provider: FieldRef<"ProviderSyncRun", 'Provider'>
    readonly startedAt: FieldRef<"ProviderSyncRun", 'DateTime'>
    readonly finishedAt: FieldRef<"ProviderSyncRun", 'DateTime'>
    readonly status: FieldRef<"ProviderSyncRun", 'SyncRunStatus'>
    readonly errorMessage: FieldRef<"ProviderSyncRun", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProviderSyncRun findUnique
   */
  export type ProviderSyncRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncRun
     */
    select?: ProviderSyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderSyncRun
     */
    omit?: ProviderSyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderSyncRunInclude<ExtArgs> | null
    /**
     * Filter, which ProviderSyncRun to fetch.
     */
    where: ProviderSyncRunWhereUniqueInput
  }

  /**
   * ProviderSyncRun findUniqueOrThrow
   */
  export type ProviderSyncRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncRun
     */
    select?: ProviderSyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderSyncRun
     */
    omit?: ProviderSyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderSyncRunInclude<ExtArgs> | null
    /**
     * Filter, which ProviderSyncRun to fetch.
     */
    where: ProviderSyncRunWhereUniqueInput
  }

  /**
   * ProviderSyncRun findFirst
   */
  export type ProviderSyncRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncRun
     */
    select?: ProviderSyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderSyncRun
     */
    omit?: ProviderSyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderSyncRunInclude<ExtArgs> | null
    /**
     * Filter, which ProviderSyncRun to fetch.
     */
    where?: ProviderSyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderSyncRuns to fetch.
     */
    orderBy?: ProviderSyncRunOrderByWithRelationInput | ProviderSyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderSyncRuns.
     */
    cursor?: ProviderSyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderSyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderSyncRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderSyncRuns.
     */
    distinct?: ProviderSyncRunScalarFieldEnum | ProviderSyncRunScalarFieldEnum[]
  }

  /**
   * ProviderSyncRun findFirstOrThrow
   */
  export type ProviderSyncRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncRun
     */
    select?: ProviderSyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderSyncRun
     */
    omit?: ProviderSyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderSyncRunInclude<ExtArgs> | null
    /**
     * Filter, which ProviderSyncRun to fetch.
     */
    where?: ProviderSyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderSyncRuns to fetch.
     */
    orderBy?: ProviderSyncRunOrderByWithRelationInput | ProviderSyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderSyncRuns.
     */
    cursor?: ProviderSyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderSyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderSyncRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderSyncRuns.
     */
    distinct?: ProviderSyncRunScalarFieldEnum | ProviderSyncRunScalarFieldEnum[]
  }

  /**
   * ProviderSyncRun findMany
   */
  export type ProviderSyncRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncRun
     */
    select?: ProviderSyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderSyncRun
     */
    omit?: ProviderSyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderSyncRunInclude<ExtArgs> | null
    /**
     * Filter, which ProviderSyncRuns to fetch.
     */
    where?: ProviderSyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderSyncRuns to fetch.
     */
    orderBy?: ProviderSyncRunOrderByWithRelationInput | ProviderSyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderSyncRuns.
     */
    cursor?: ProviderSyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderSyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderSyncRuns.
     */
    skip?: number
    distinct?: ProviderSyncRunScalarFieldEnum | ProviderSyncRunScalarFieldEnum[]
  }

  /**
   * ProviderSyncRun create
   */
  export type ProviderSyncRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncRun
     */
    select?: ProviderSyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderSyncRun
     */
    omit?: ProviderSyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderSyncRunInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderSyncRun.
     */
    data: XOR<ProviderSyncRunCreateInput, ProviderSyncRunUncheckedCreateInput>
  }

  /**
   * ProviderSyncRun createMany
   */
  export type ProviderSyncRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderSyncRuns.
     */
    data: ProviderSyncRunCreateManyInput | ProviderSyncRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderSyncRun createManyAndReturn
   */
  export type ProviderSyncRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncRun
     */
    select?: ProviderSyncRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderSyncRun
     */
    omit?: ProviderSyncRunOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderSyncRuns.
     */
    data: ProviderSyncRunCreateManyInput | ProviderSyncRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderSyncRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderSyncRun update
   */
  export type ProviderSyncRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncRun
     */
    select?: ProviderSyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderSyncRun
     */
    omit?: ProviderSyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderSyncRunInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderSyncRun.
     */
    data: XOR<ProviderSyncRunUpdateInput, ProviderSyncRunUncheckedUpdateInput>
    /**
     * Choose, which ProviderSyncRun to update.
     */
    where: ProviderSyncRunWhereUniqueInput
  }

  /**
   * ProviderSyncRun updateMany
   */
  export type ProviderSyncRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderSyncRuns.
     */
    data: XOR<ProviderSyncRunUpdateManyMutationInput, ProviderSyncRunUncheckedUpdateManyInput>
    /**
     * Filter which ProviderSyncRuns to update
     */
    where?: ProviderSyncRunWhereInput
    /**
     * Limit how many ProviderSyncRuns to update.
     */
    limit?: number
  }

  /**
   * ProviderSyncRun updateManyAndReturn
   */
  export type ProviderSyncRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncRun
     */
    select?: ProviderSyncRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderSyncRun
     */
    omit?: ProviderSyncRunOmit<ExtArgs> | null
    /**
     * The data used to update ProviderSyncRuns.
     */
    data: XOR<ProviderSyncRunUpdateManyMutationInput, ProviderSyncRunUncheckedUpdateManyInput>
    /**
     * Filter which ProviderSyncRuns to update
     */
    where?: ProviderSyncRunWhereInput
    /**
     * Limit how many ProviderSyncRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderSyncRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderSyncRun upsert
   */
  export type ProviderSyncRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncRun
     */
    select?: ProviderSyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderSyncRun
     */
    omit?: ProviderSyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderSyncRunInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderSyncRun to update in case it exists.
     */
    where: ProviderSyncRunWhereUniqueInput
    /**
     * In case the ProviderSyncRun found by the `where` argument doesn't exist, create a new ProviderSyncRun with this data.
     */
    create: XOR<ProviderSyncRunCreateInput, ProviderSyncRunUncheckedCreateInput>
    /**
     * In case the ProviderSyncRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderSyncRunUpdateInput, ProviderSyncRunUncheckedUpdateInput>
  }

  /**
   * ProviderSyncRun delete
   */
  export type ProviderSyncRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncRun
     */
    select?: ProviderSyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderSyncRun
     */
    omit?: ProviderSyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderSyncRunInclude<ExtArgs> | null
    /**
     * Filter which ProviderSyncRun to delete.
     */
    where: ProviderSyncRunWhereUniqueInput
  }

  /**
   * ProviderSyncRun deleteMany
   */
  export type ProviderSyncRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderSyncRuns to delete
     */
    where?: ProviderSyncRunWhereInput
    /**
     * Limit how many ProviderSyncRuns to delete.
     */
    limit?: number
  }

  /**
   * ProviderSyncRun without action
   */
  export type ProviderSyncRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncRun
     */
    select?: ProviderSyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderSyncRun
     */
    omit?: ProviderSyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderSyncRunInclude<ExtArgs> | null
  }


  /**
   * Model AccountBalance
   */

  export type AggregateAccountBalance = {
    _count: AccountBalanceCountAggregateOutputType | null
    _avg: AccountBalanceAvgAggregateOutputType | null
    _sum: AccountBalanceSumAggregateOutputType | null
    _min: AccountBalanceMinAggregateOutputType | null
    _max: AccountBalanceMaxAggregateOutputType | null
  }

  export type AccountBalanceAvgAggregateOutputType = {
    free: Decimal | null
    locked: Decimal | null
    usdValue: Decimal | null
  }

  export type AccountBalanceSumAggregateOutputType = {
    free: Decimal | null
    locked: Decimal | null
    usdValue: Decimal | null
  }

  export type AccountBalanceMinAggregateOutputType = {
    snapshotId: string | null
    accountId: string | null
    asset: string | null
    free: Decimal | null
    locked: Decimal | null
    usdValue: Decimal | null
  }

  export type AccountBalanceMaxAggregateOutputType = {
    snapshotId: string | null
    accountId: string | null
    asset: string | null
    free: Decimal | null
    locked: Decimal | null
    usdValue: Decimal | null
  }

  export type AccountBalanceCountAggregateOutputType = {
    snapshotId: number
    accountId: number
    asset: number
    free: number
    locked: number
    usdValue: number
    _all: number
  }


  export type AccountBalanceAvgAggregateInputType = {
    free?: true
    locked?: true
    usdValue?: true
  }

  export type AccountBalanceSumAggregateInputType = {
    free?: true
    locked?: true
    usdValue?: true
  }

  export type AccountBalanceMinAggregateInputType = {
    snapshotId?: true
    accountId?: true
    asset?: true
    free?: true
    locked?: true
    usdValue?: true
  }

  export type AccountBalanceMaxAggregateInputType = {
    snapshotId?: true
    accountId?: true
    asset?: true
    free?: true
    locked?: true
    usdValue?: true
  }

  export type AccountBalanceCountAggregateInputType = {
    snapshotId?: true
    accountId?: true
    asset?: true
    free?: true
    locked?: true
    usdValue?: true
    _all?: true
  }

  export type AccountBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountBalance to aggregate.
     */
    where?: AccountBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBalances to fetch.
     */
    orderBy?: AccountBalanceOrderByWithRelationInput | AccountBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountBalances
    **/
    _count?: true | AccountBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountBalanceMaxAggregateInputType
  }

  export type GetAccountBalanceAggregateType<T extends AccountBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountBalance[P]>
      : GetScalarType<T[P], AggregateAccountBalance[P]>
  }




  export type AccountBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountBalanceWhereInput
    orderBy?: AccountBalanceOrderByWithAggregationInput | AccountBalanceOrderByWithAggregationInput[]
    by: AccountBalanceScalarFieldEnum[] | AccountBalanceScalarFieldEnum
    having?: AccountBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountBalanceCountAggregateInputType | true
    _avg?: AccountBalanceAvgAggregateInputType
    _sum?: AccountBalanceSumAggregateInputType
    _min?: AccountBalanceMinAggregateInputType
    _max?: AccountBalanceMaxAggregateInputType
  }

  export type AccountBalanceGroupByOutputType = {
    snapshotId: string
    accountId: string
    asset: string
    free: Decimal
    locked: Decimal
    usdValue: Decimal | null
    _count: AccountBalanceCountAggregateOutputType | null
    _avg: AccountBalanceAvgAggregateOutputType | null
    _sum: AccountBalanceSumAggregateOutputType | null
    _min: AccountBalanceMinAggregateOutputType | null
    _max: AccountBalanceMaxAggregateOutputType | null
  }

  type GetAccountBalanceGroupByPayload<T extends AccountBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], AccountBalanceGroupByOutputType[P]>
        }
      >
    >


  export type AccountBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    snapshotId?: boolean
    accountId?: boolean
    asset?: boolean
    free?: boolean
    locked?: boolean
    usdValue?: boolean
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountBalance"]>

  export type AccountBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    snapshotId?: boolean
    accountId?: boolean
    asset?: boolean
    free?: boolean
    locked?: boolean
    usdValue?: boolean
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountBalance"]>

  export type AccountBalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    snapshotId?: boolean
    accountId?: boolean
    asset?: boolean
    free?: boolean
    locked?: boolean
    usdValue?: boolean
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountBalance"]>

  export type AccountBalanceSelectScalar = {
    snapshotId?: boolean
    accountId?: boolean
    asset?: boolean
    free?: boolean
    locked?: boolean
    usdValue?: boolean
  }

  export type AccountBalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"snapshotId" | "accountId" | "asset" | "free" | "locked" | "usdValue", ExtArgs["result"]["accountBalance"]>
  export type AccountBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type AccountBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type AccountBalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $AccountBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountBalance"
    objects: {
      snapshot: Prisma.$SnapshotPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      snapshotId: string
      accountId: string
      asset: string
      free: Prisma.Decimal
      locked: Prisma.Decimal
      usdValue: Prisma.Decimal | null
    }, ExtArgs["result"]["accountBalance"]>
    composites: {}
  }

  type AccountBalanceGetPayload<S extends boolean | null | undefined | AccountBalanceDefaultArgs> = $Result.GetResult<Prisma.$AccountBalancePayload, S>

  type AccountBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountBalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountBalanceCountAggregateInputType | true
    }

  export interface AccountBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountBalance'], meta: { name: 'AccountBalance' } }
    /**
     * Find zero or one AccountBalance that matches the filter.
     * @param {AccountBalanceFindUniqueArgs} args - Arguments to find a AccountBalance
     * @example
     * // Get one AccountBalance
     * const accountBalance = await prisma.accountBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountBalanceFindUniqueArgs>(args: SelectSubset<T, AccountBalanceFindUniqueArgs<ExtArgs>>): Prisma__AccountBalanceClient<$Result.GetResult<Prisma.$AccountBalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountBalance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountBalanceFindUniqueOrThrowArgs} args - Arguments to find a AccountBalance
     * @example
     * // Get one AccountBalance
     * const accountBalance = await prisma.accountBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountBalanceClient<$Result.GetResult<Prisma.$AccountBalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBalanceFindFirstArgs} args - Arguments to find a AccountBalance
     * @example
     * // Get one AccountBalance
     * const accountBalance = await prisma.accountBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountBalanceFindFirstArgs>(args?: SelectSubset<T, AccountBalanceFindFirstArgs<ExtArgs>>): Prisma__AccountBalanceClient<$Result.GetResult<Prisma.$AccountBalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBalanceFindFirstOrThrowArgs} args - Arguments to find a AccountBalance
     * @example
     * // Get one AccountBalance
     * const accountBalance = await prisma.accountBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountBalanceClient<$Result.GetResult<Prisma.$AccountBalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountBalances
     * const accountBalances = await prisma.accountBalance.findMany()
     * 
     * // Get first 10 AccountBalances
     * const accountBalances = await prisma.accountBalance.findMany({ take: 10 })
     * 
     * // Only select the `snapshotId`
     * const accountBalanceWithSnapshotIdOnly = await prisma.accountBalance.findMany({ select: { snapshotId: true } })
     * 
     */
    findMany<T extends AccountBalanceFindManyArgs>(args?: SelectSubset<T, AccountBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountBalance.
     * @param {AccountBalanceCreateArgs} args - Arguments to create a AccountBalance.
     * @example
     * // Create one AccountBalance
     * const AccountBalance = await prisma.accountBalance.create({
     *   data: {
     *     // ... data to create a AccountBalance
     *   }
     * })
     * 
     */
    create<T extends AccountBalanceCreateArgs>(args: SelectSubset<T, AccountBalanceCreateArgs<ExtArgs>>): Prisma__AccountBalanceClient<$Result.GetResult<Prisma.$AccountBalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountBalances.
     * @param {AccountBalanceCreateManyArgs} args - Arguments to create many AccountBalances.
     * @example
     * // Create many AccountBalances
     * const accountBalance = await prisma.accountBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountBalanceCreateManyArgs>(args?: SelectSubset<T, AccountBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountBalances and returns the data saved in the database.
     * @param {AccountBalanceCreateManyAndReturnArgs} args - Arguments to create many AccountBalances.
     * @example
     * // Create many AccountBalances
     * const accountBalance = await prisma.accountBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountBalances and only return the `snapshotId`
     * const accountBalanceWithSnapshotIdOnly = await prisma.accountBalance.createManyAndReturn({
     *   select: { snapshotId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountBalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountBalance.
     * @param {AccountBalanceDeleteArgs} args - Arguments to delete one AccountBalance.
     * @example
     * // Delete one AccountBalance
     * const AccountBalance = await prisma.accountBalance.delete({
     *   where: {
     *     // ... filter to delete one AccountBalance
     *   }
     * })
     * 
     */
    delete<T extends AccountBalanceDeleteArgs>(args: SelectSubset<T, AccountBalanceDeleteArgs<ExtArgs>>): Prisma__AccountBalanceClient<$Result.GetResult<Prisma.$AccountBalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountBalance.
     * @param {AccountBalanceUpdateArgs} args - Arguments to update one AccountBalance.
     * @example
     * // Update one AccountBalance
     * const accountBalance = await prisma.accountBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountBalanceUpdateArgs>(args: SelectSubset<T, AccountBalanceUpdateArgs<ExtArgs>>): Prisma__AccountBalanceClient<$Result.GetResult<Prisma.$AccountBalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountBalances.
     * @param {AccountBalanceDeleteManyArgs} args - Arguments to filter AccountBalances to delete.
     * @example
     * // Delete a few AccountBalances
     * const { count } = await prisma.accountBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountBalanceDeleteManyArgs>(args?: SelectSubset<T, AccountBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountBalances
     * const accountBalance = await prisma.accountBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountBalanceUpdateManyArgs>(args: SelectSubset<T, AccountBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountBalances and returns the data updated in the database.
     * @param {AccountBalanceUpdateManyAndReturnArgs} args - Arguments to update many AccountBalances.
     * @example
     * // Update many AccountBalances
     * const accountBalance = await prisma.accountBalance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountBalances and only return the `snapshotId`
     * const accountBalanceWithSnapshotIdOnly = await prisma.accountBalance.updateManyAndReturn({
     *   select: { snapshotId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountBalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountBalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountBalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountBalance.
     * @param {AccountBalanceUpsertArgs} args - Arguments to update or create a AccountBalance.
     * @example
     * // Update or create a AccountBalance
     * const accountBalance = await prisma.accountBalance.upsert({
     *   create: {
     *     // ... data to create a AccountBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountBalance we want to update
     *   }
     * })
     */
    upsert<T extends AccountBalanceUpsertArgs>(args: SelectSubset<T, AccountBalanceUpsertArgs<ExtArgs>>): Prisma__AccountBalanceClient<$Result.GetResult<Prisma.$AccountBalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBalanceCountArgs} args - Arguments to filter AccountBalances to count.
     * @example
     * // Count the number of AccountBalances
     * const count = await prisma.accountBalance.count({
     *   where: {
     *     // ... the filter for the AccountBalances we want to count
     *   }
     * })
    **/
    count<T extends AccountBalanceCountArgs>(
      args?: Subset<T, AccountBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountBalanceAggregateArgs>(args: Subset<T, AccountBalanceAggregateArgs>): Prisma.PrismaPromise<GetAccountBalanceAggregateType<T>>

    /**
     * Group by AccountBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBalanceGroupByArgs} args - Group by arguments.
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
      T extends AccountBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountBalanceGroupByArgs['orderBy'] }
        : { orderBy?: AccountBalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountBalance model
   */
  readonly fields: AccountBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    snapshot<T extends SnapshotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SnapshotDefaultArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AccountBalance model
   */
  interface AccountBalanceFieldRefs {
    readonly snapshotId: FieldRef<"AccountBalance", 'String'>
    readonly accountId: FieldRef<"AccountBalance", 'String'>
    readonly asset: FieldRef<"AccountBalance", 'String'>
    readonly free: FieldRef<"AccountBalance", 'Decimal'>
    readonly locked: FieldRef<"AccountBalance", 'Decimal'>
    readonly usdValue: FieldRef<"AccountBalance", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * AccountBalance findUnique
   */
  export type AccountBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceInclude<ExtArgs> | null
    /**
     * Filter, which AccountBalance to fetch.
     */
    where: AccountBalanceWhereUniqueInput
  }

  /**
   * AccountBalance findUniqueOrThrow
   */
  export type AccountBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceInclude<ExtArgs> | null
    /**
     * Filter, which AccountBalance to fetch.
     */
    where: AccountBalanceWhereUniqueInput
  }

  /**
   * AccountBalance findFirst
   */
  export type AccountBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceInclude<ExtArgs> | null
    /**
     * Filter, which AccountBalance to fetch.
     */
    where?: AccountBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBalances to fetch.
     */
    orderBy?: AccountBalanceOrderByWithRelationInput | AccountBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountBalances.
     */
    cursor?: AccountBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountBalances.
     */
    distinct?: AccountBalanceScalarFieldEnum | AccountBalanceScalarFieldEnum[]
  }

  /**
   * AccountBalance findFirstOrThrow
   */
  export type AccountBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceInclude<ExtArgs> | null
    /**
     * Filter, which AccountBalance to fetch.
     */
    where?: AccountBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBalances to fetch.
     */
    orderBy?: AccountBalanceOrderByWithRelationInput | AccountBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountBalances.
     */
    cursor?: AccountBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountBalances.
     */
    distinct?: AccountBalanceScalarFieldEnum | AccountBalanceScalarFieldEnum[]
  }

  /**
   * AccountBalance findMany
   */
  export type AccountBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceInclude<ExtArgs> | null
    /**
     * Filter, which AccountBalances to fetch.
     */
    where?: AccountBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBalances to fetch.
     */
    orderBy?: AccountBalanceOrderByWithRelationInput | AccountBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountBalances.
     */
    cursor?: AccountBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBalances.
     */
    skip?: number
    distinct?: AccountBalanceScalarFieldEnum | AccountBalanceScalarFieldEnum[]
  }

  /**
   * AccountBalance create
   */
  export type AccountBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountBalance.
     */
    data: XOR<AccountBalanceCreateInput, AccountBalanceUncheckedCreateInput>
  }

  /**
   * AccountBalance createMany
   */
  export type AccountBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountBalances.
     */
    data: AccountBalanceCreateManyInput | AccountBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountBalance createManyAndReturn
   */
  export type AccountBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * The data used to create many AccountBalances.
     */
    data: AccountBalanceCreateManyInput | AccountBalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountBalance update
   */
  export type AccountBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountBalance.
     */
    data: XOR<AccountBalanceUpdateInput, AccountBalanceUncheckedUpdateInput>
    /**
     * Choose, which AccountBalance to update.
     */
    where: AccountBalanceWhereUniqueInput
  }

  /**
   * AccountBalance updateMany
   */
  export type AccountBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountBalances.
     */
    data: XOR<AccountBalanceUpdateManyMutationInput, AccountBalanceUncheckedUpdateManyInput>
    /**
     * Filter which AccountBalances to update
     */
    where?: AccountBalanceWhereInput
    /**
     * Limit how many AccountBalances to update.
     */
    limit?: number
  }

  /**
   * AccountBalance updateManyAndReturn
   */
  export type AccountBalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * The data used to update AccountBalances.
     */
    data: XOR<AccountBalanceUpdateManyMutationInput, AccountBalanceUncheckedUpdateManyInput>
    /**
     * Filter which AccountBalances to update
     */
    where?: AccountBalanceWhereInput
    /**
     * Limit how many AccountBalances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountBalance upsert
   */
  export type AccountBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountBalance to update in case it exists.
     */
    where: AccountBalanceWhereUniqueInput
    /**
     * In case the AccountBalance found by the `where` argument doesn't exist, create a new AccountBalance with this data.
     */
    create: XOR<AccountBalanceCreateInput, AccountBalanceUncheckedCreateInput>
    /**
     * In case the AccountBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountBalanceUpdateInput, AccountBalanceUncheckedUpdateInput>
  }

  /**
   * AccountBalance delete
   */
  export type AccountBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceInclude<ExtArgs> | null
    /**
     * Filter which AccountBalance to delete.
     */
    where: AccountBalanceWhereUniqueInput
  }

  /**
   * AccountBalance deleteMany
   */
  export type AccountBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountBalances to delete
     */
    where?: AccountBalanceWhereInput
    /**
     * Limit how many AccountBalances to delete.
     */
    limit?: number
  }

  /**
   * AccountBalance without action
   */
  export type AccountBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBalance
     */
    select?: AccountBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountBalance
     */
    omit?: AccountBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBalanceInclude<ExtArgs> | null
  }


  /**
   * Model Position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionAvgAggregateOutputType = {
    size: Decimal | null
    entryPrice: Decimal | null
    markPrice: Decimal | null
    pnlUnrealizedUsd: Decimal | null
  }

  export type PositionSumAggregateOutputType = {
    size: Decimal | null
    entryPrice: Decimal | null
    markPrice: Decimal | null
    pnlUnrealizedUsd: Decimal | null
  }

  export type PositionMinAggregateOutputType = {
    snapshotId: string | null
    accountId: string | null
    symbol: string | null
    side: $Enums.PositionSide | null
    size: Decimal | null
    entryPrice: Decimal | null
    markPrice: Decimal | null
    pnlUnrealizedUsd: Decimal | null
  }

  export type PositionMaxAggregateOutputType = {
    snapshotId: string | null
    accountId: string | null
    symbol: string | null
    side: $Enums.PositionSide | null
    size: Decimal | null
    entryPrice: Decimal | null
    markPrice: Decimal | null
    pnlUnrealizedUsd: Decimal | null
  }

  export type PositionCountAggregateOutputType = {
    snapshotId: number
    accountId: number
    symbol: number
    side: number
    size: number
    entryPrice: number
    markPrice: number
    pnlUnrealizedUsd: number
    _all: number
  }


  export type PositionAvgAggregateInputType = {
    size?: true
    entryPrice?: true
    markPrice?: true
    pnlUnrealizedUsd?: true
  }

  export type PositionSumAggregateInputType = {
    size?: true
    entryPrice?: true
    markPrice?: true
    pnlUnrealizedUsd?: true
  }

  export type PositionMinAggregateInputType = {
    snapshotId?: true
    accountId?: true
    symbol?: true
    side?: true
    size?: true
    entryPrice?: true
    markPrice?: true
    pnlUnrealizedUsd?: true
  }

  export type PositionMaxAggregateInputType = {
    snapshotId?: true
    accountId?: true
    symbol?: true
    side?: true
    size?: true
    entryPrice?: true
    markPrice?: true
    pnlUnrealizedUsd?: true
  }

  export type PositionCountAggregateInputType = {
    snapshotId?: true
    accountId?: true
    symbol?: true
    side?: true
    size?: true
    entryPrice?: true
    markPrice?: true
    pnlUnrealizedUsd?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Position to aggregate.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithAggregationInput | PositionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _avg?: PositionAvgAggregateInputType
    _sum?: PositionSumAggregateInputType
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    snapshotId: string
    accountId: string
    symbol: string
    side: $Enums.PositionSide
    size: Decimal
    entryPrice: Decimal | null
    markPrice: Decimal | null
    pnlUnrealizedUsd: Decimal | null
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    snapshotId?: boolean
    accountId?: boolean
    symbol?: boolean
    side?: boolean
    size?: boolean
    entryPrice?: boolean
    markPrice?: boolean
    pnlUnrealizedUsd?: boolean
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    snapshotId?: boolean
    accountId?: boolean
    symbol?: boolean
    side?: boolean
    size?: boolean
    entryPrice?: boolean
    markPrice?: boolean
    pnlUnrealizedUsd?: boolean
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    snapshotId?: boolean
    accountId?: boolean
    symbol?: boolean
    side?: boolean
    size?: boolean
    entryPrice?: boolean
    markPrice?: boolean
    pnlUnrealizedUsd?: boolean
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectScalar = {
    snapshotId?: boolean
    accountId?: boolean
    symbol?: boolean
    side?: boolean
    size?: boolean
    entryPrice?: boolean
    markPrice?: boolean
    pnlUnrealizedUsd?: boolean
  }

  export type PositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"snapshotId" | "accountId" | "symbol" | "side" | "size" | "entryPrice" | "markPrice" | "pnlUnrealizedUsd", ExtArgs["result"]["position"]>
  export type PositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type PositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type PositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $PositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Position"
    objects: {
      snapshot: Prisma.$SnapshotPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      snapshotId: string
      accountId: string
      symbol: string
      side: $Enums.PositionSide
      size: Prisma.Decimal
      entryPrice: Prisma.Decimal | null
      markPrice: Prisma.Decimal | null
      pnlUnrealizedUsd: Prisma.Decimal | null
    }, ExtArgs["result"]["position"]>
    composites: {}
  }

  type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = $Result.GetResult<Prisma.$PositionPayload, S>

  type PositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface PositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Position'], meta: { name: 'Position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionFindUniqueArgs>(args: SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Position that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionFindFirstArgs>(args?: SelectSubset<T, PositionFindFirstArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `snapshotId`
     * const positionWithSnapshotIdOnly = await prisma.position.findMany({ select: { snapshotId: true } })
     * 
     */
    findMany<T extends PositionFindManyArgs>(args?: SelectSubset<T, PositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
     */
    create<T extends PositionCreateArgs>(args: SelectSubset<T, PositionCreateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Positions.
     * @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionCreateManyArgs>(args?: SelectSubset<T, PositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {PositionCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `snapshotId`
     * const positionWithSnapshotIdOnly = await prisma.position.createManyAndReturn({
     *   select: { snapshotId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
     */
    delete<T extends PositionDeleteArgs>(args: SelectSubset<T, PositionDeleteArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionUpdateArgs>(args: SelectSubset<T, PositionUpdateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionDeleteManyArgs>(args?: SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionUpdateManyArgs>(args: SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {PositionUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Positions and only return the `snapshotId`
     * const positionWithSnapshotIdOnly = await prisma.position.updateManyAndReturn({
     *   select: { snapshotId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PositionUpdateManyAndReturnArgs>(args: SelectSubset<T, PositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
     */
    upsert<T extends PositionUpsertArgs>(args: SelectSubset<T, PositionUpsertArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
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
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Position model
   */
  readonly fields: PositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    snapshot<T extends SnapshotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SnapshotDefaultArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Position model
   */
  interface PositionFieldRefs {
    readonly snapshotId: FieldRef<"Position", 'String'>
    readonly accountId: FieldRef<"Position", 'String'>
    readonly symbol: FieldRef<"Position", 'String'>
    readonly side: FieldRef<"Position", 'PositionSide'>
    readonly size: FieldRef<"Position", 'Decimal'>
    readonly entryPrice: FieldRef<"Position", 'Decimal'>
    readonly markPrice: FieldRef<"Position", 'Decimal'>
    readonly pnlUnrealizedUsd: FieldRef<"Position", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Position findUnique
   */
  export type PositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findFirst
   */
  export type PositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findMany
   */
  export type PositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position create
   */
  export type PositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to create a Position.
     */
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }

  /**
   * Position createMany
   */
  export type PositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position createManyAndReturn
   */
  export type PositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Position update
   */
  export type PositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to update a Position.
     */
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position updateManyAndReturn
   */
  export type PositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Position upsert
   */
  export type PositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The filter to search for the Position to update in case it exists.
     */
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     */
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }

  /**
   * Position delete
   */
  export type PositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter which Position to delete.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to delete.
     */
    limit?: number
  }

  /**
   * Position without action
   */
  export type PositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
  }


  /**
   * Model Transfer
   */

  export type AggregateTransfer = {
    _count: TransferCountAggregateOutputType | null
    _avg: TransferAvgAggregateOutputType | null
    _sum: TransferSumAggregateOutputType | null
    _min: TransferMinAggregateOutputType | null
    _max: TransferMaxAggregateOutputType | null
  }

  export type TransferAvgAggregateOutputType = {
    amount: Decimal | null
    fee: Decimal | null
  }

  export type TransferSumAggregateOutputType = {
    amount: Decimal | null
    fee: Decimal | null
  }

  export type TransferMinAggregateOutputType = {
    id: string | null
    ts: Date | null
    fromAccountId: string | null
    toAccountId: string | null
    asset: string | null
    amount: Decimal | null
    fee: Decimal | null
    txid: string | null
    note: string | null
  }

  export type TransferMaxAggregateOutputType = {
    id: string | null
    ts: Date | null
    fromAccountId: string | null
    toAccountId: string | null
    asset: string | null
    amount: Decimal | null
    fee: Decimal | null
    txid: string | null
    note: string | null
  }

  export type TransferCountAggregateOutputType = {
    id: number
    ts: number
    fromAccountId: number
    toAccountId: number
    asset: number
    amount: number
    fee: number
    txid: number
    note: number
    _all: number
  }


  export type TransferAvgAggregateInputType = {
    amount?: true
    fee?: true
  }

  export type TransferSumAggregateInputType = {
    amount?: true
    fee?: true
  }

  export type TransferMinAggregateInputType = {
    id?: true
    ts?: true
    fromAccountId?: true
    toAccountId?: true
    asset?: true
    amount?: true
    fee?: true
    txid?: true
    note?: true
  }

  export type TransferMaxAggregateInputType = {
    id?: true
    ts?: true
    fromAccountId?: true
    toAccountId?: true
    asset?: true
    amount?: true
    fee?: true
    txid?: true
    note?: true
  }

  export type TransferCountAggregateInputType = {
    id?: true
    ts?: true
    fromAccountId?: true
    toAccountId?: true
    asset?: true
    amount?: true
    fee?: true
    txid?: true
    note?: true
    _all?: true
  }

  export type TransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transfer to aggregate.
     */
    where?: TransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transfers to fetch.
     */
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transfers
    **/
    _count?: true | TransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransferMaxAggregateInputType
  }

  export type GetTransferAggregateType<T extends TransferAggregateArgs> = {
        [P in keyof T & keyof AggregateTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransfer[P]>
      : GetScalarType<T[P], AggregateTransfer[P]>
  }




  export type TransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferWhereInput
    orderBy?: TransferOrderByWithAggregationInput | TransferOrderByWithAggregationInput[]
    by: TransferScalarFieldEnum[] | TransferScalarFieldEnum
    having?: TransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransferCountAggregateInputType | true
    _avg?: TransferAvgAggregateInputType
    _sum?: TransferSumAggregateInputType
    _min?: TransferMinAggregateInputType
    _max?: TransferMaxAggregateInputType
  }

  export type TransferGroupByOutputType = {
    id: string
    ts: Date
    fromAccountId: string | null
    toAccountId: string | null
    asset: string
    amount: Decimal
    fee: Decimal | null
    txid: string | null
    note: string | null
    _count: TransferCountAggregateOutputType | null
    _avg: TransferAvgAggregateOutputType | null
    _sum: TransferSumAggregateOutputType | null
    _min: TransferMinAggregateOutputType | null
    _max: TransferMaxAggregateOutputType | null
  }

  type GetTransferGroupByPayload<T extends TransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransferGroupByOutputType[P]>
            : GetScalarType<T[P], TransferGroupByOutputType[P]>
        }
      >
    >


  export type TransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ts?: boolean
    fromAccountId?: boolean
    toAccountId?: boolean
    asset?: boolean
    amount?: boolean
    fee?: boolean
    txid?: boolean
    note?: boolean
    fromAccount?: boolean | Transfer$fromAccountArgs<ExtArgs>
    toAccount?: boolean | Transfer$toAccountArgs<ExtArgs>
  }, ExtArgs["result"]["transfer"]>

  export type TransferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ts?: boolean
    fromAccountId?: boolean
    toAccountId?: boolean
    asset?: boolean
    amount?: boolean
    fee?: boolean
    txid?: boolean
    note?: boolean
    fromAccount?: boolean | Transfer$fromAccountArgs<ExtArgs>
    toAccount?: boolean | Transfer$toAccountArgs<ExtArgs>
  }, ExtArgs["result"]["transfer"]>

  export type TransferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ts?: boolean
    fromAccountId?: boolean
    toAccountId?: boolean
    asset?: boolean
    amount?: boolean
    fee?: boolean
    txid?: boolean
    note?: boolean
    fromAccount?: boolean | Transfer$fromAccountArgs<ExtArgs>
    toAccount?: boolean | Transfer$toAccountArgs<ExtArgs>
  }, ExtArgs["result"]["transfer"]>

  export type TransferSelectScalar = {
    id?: boolean
    ts?: boolean
    fromAccountId?: boolean
    toAccountId?: boolean
    asset?: boolean
    amount?: boolean
    fee?: boolean
    txid?: boolean
    note?: boolean
  }

  export type TransferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ts" | "fromAccountId" | "toAccountId" | "asset" | "amount" | "fee" | "txid" | "note", ExtArgs["result"]["transfer"]>
  export type TransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromAccount?: boolean | Transfer$fromAccountArgs<ExtArgs>
    toAccount?: boolean | Transfer$toAccountArgs<ExtArgs>
  }
  export type TransferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromAccount?: boolean | Transfer$fromAccountArgs<ExtArgs>
    toAccount?: boolean | Transfer$toAccountArgs<ExtArgs>
  }
  export type TransferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromAccount?: boolean | Transfer$fromAccountArgs<ExtArgs>
    toAccount?: boolean | Transfer$toAccountArgs<ExtArgs>
  }

  export type $TransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transfer"
    objects: {
      fromAccount: Prisma.$AccountPayload<ExtArgs> | null
      toAccount: Prisma.$AccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ts: Date
      fromAccountId: string | null
      toAccountId: string | null
      asset: string
      amount: Prisma.Decimal
      fee: Prisma.Decimal | null
      txid: string | null
      note: string | null
    }, ExtArgs["result"]["transfer"]>
    composites: {}
  }

  type TransferGetPayload<S extends boolean | null | undefined | TransferDefaultArgs> = $Result.GetResult<Prisma.$TransferPayload, S>

  type TransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransferCountAggregateInputType | true
    }

  export interface TransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transfer'], meta: { name: 'Transfer' } }
    /**
     * Find zero or one Transfer that matches the filter.
     * @param {TransferFindUniqueArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransferFindUniqueArgs>(args: SelectSubset<T, TransferFindUniqueArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transfer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransferFindUniqueOrThrowArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransferFindUniqueOrThrowArgs>(args: SelectSubset<T, TransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferFindFirstArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransferFindFirstArgs>(args?: SelectSubset<T, TransferFindFirstArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferFindFirstOrThrowArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransferFindFirstOrThrowArgs>(args?: SelectSubset<T, TransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transfers
     * const transfers = await prisma.transfer.findMany()
     * 
     * // Get first 10 Transfers
     * const transfers = await prisma.transfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transferWithIdOnly = await prisma.transfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransferFindManyArgs>(args?: SelectSubset<T, TransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transfer.
     * @param {TransferCreateArgs} args - Arguments to create a Transfer.
     * @example
     * // Create one Transfer
     * const Transfer = await prisma.transfer.create({
     *   data: {
     *     // ... data to create a Transfer
     *   }
     * })
     * 
     */
    create<T extends TransferCreateArgs>(args: SelectSubset<T, TransferCreateArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transfers.
     * @param {TransferCreateManyArgs} args - Arguments to create many Transfers.
     * @example
     * // Create many Transfers
     * const transfer = await prisma.transfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransferCreateManyArgs>(args?: SelectSubset<T, TransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transfers and returns the data saved in the database.
     * @param {TransferCreateManyAndReturnArgs} args - Arguments to create many Transfers.
     * @example
     * // Create many Transfers
     * const transfer = await prisma.transfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transfers and only return the `id`
     * const transferWithIdOnly = await prisma.transfer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransferCreateManyAndReturnArgs>(args?: SelectSubset<T, TransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transfer.
     * @param {TransferDeleteArgs} args - Arguments to delete one Transfer.
     * @example
     * // Delete one Transfer
     * const Transfer = await prisma.transfer.delete({
     *   where: {
     *     // ... filter to delete one Transfer
     *   }
     * })
     * 
     */
    delete<T extends TransferDeleteArgs>(args: SelectSubset<T, TransferDeleteArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transfer.
     * @param {TransferUpdateArgs} args - Arguments to update one Transfer.
     * @example
     * // Update one Transfer
     * const transfer = await prisma.transfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransferUpdateArgs>(args: SelectSubset<T, TransferUpdateArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transfers.
     * @param {TransferDeleteManyArgs} args - Arguments to filter Transfers to delete.
     * @example
     * // Delete a few Transfers
     * const { count } = await prisma.transfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransferDeleteManyArgs>(args?: SelectSubset<T, TransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transfers
     * const transfer = await prisma.transfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransferUpdateManyArgs>(args: SelectSubset<T, TransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transfers and returns the data updated in the database.
     * @param {TransferUpdateManyAndReturnArgs} args - Arguments to update many Transfers.
     * @example
     * // Update many Transfers
     * const transfer = await prisma.transfer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transfers and only return the `id`
     * const transferWithIdOnly = await prisma.transfer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransferUpdateManyAndReturnArgs>(args: SelectSubset<T, TransferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transfer.
     * @param {TransferUpsertArgs} args - Arguments to update or create a Transfer.
     * @example
     * // Update or create a Transfer
     * const transfer = await prisma.transfer.upsert({
     *   create: {
     *     // ... data to create a Transfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transfer we want to update
     *   }
     * })
     */
    upsert<T extends TransferUpsertArgs>(args: SelectSubset<T, TransferUpsertArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferCountArgs} args - Arguments to filter Transfers to count.
     * @example
     * // Count the number of Transfers
     * const count = await prisma.transfer.count({
     *   where: {
     *     // ... the filter for the Transfers we want to count
     *   }
     * })
    **/
    count<T extends TransferCountArgs>(
      args?: Subset<T, TransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransferAggregateArgs>(args: Subset<T, TransferAggregateArgs>): Prisma.PrismaPromise<GetTransferAggregateType<T>>

    /**
     * Group by Transfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferGroupByArgs} args - Group by arguments.
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
      T extends TransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransferGroupByArgs['orderBy'] }
        : { orderBy?: TransferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transfer model
   */
  readonly fields: TransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromAccount<T extends Transfer$fromAccountArgs<ExtArgs> = {}>(args?: Subset<T, Transfer$fromAccountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    toAccount<T extends Transfer$toAccountArgs<ExtArgs> = {}>(args?: Subset<T, Transfer$toAccountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transfer model
   */
  interface TransferFieldRefs {
    readonly id: FieldRef<"Transfer", 'String'>
    readonly ts: FieldRef<"Transfer", 'DateTime'>
    readonly fromAccountId: FieldRef<"Transfer", 'String'>
    readonly toAccountId: FieldRef<"Transfer", 'String'>
    readonly asset: FieldRef<"Transfer", 'String'>
    readonly amount: FieldRef<"Transfer", 'Decimal'>
    readonly fee: FieldRef<"Transfer", 'Decimal'>
    readonly txid: FieldRef<"Transfer", 'String'>
    readonly note: FieldRef<"Transfer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transfer findUnique
   */
  export type TransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfer to fetch.
     */
    where: TransferWhereUniqueInput
  }

  /**
   * Transfer findUniqueOrThrow
   */
  export type TransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfer to fetch.
     */
    where: TransferWhereUniqueInput
  }

  /**
   * Transfer findFirst
   */
  export type TransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfer to fetch.
     */
    where?: TransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transfers to fetch.
     */
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transfers.
     */
    cursor?: TransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transfers.
     */
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * Transfer findFirstOrThrow
   */
  export type TransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfer to fetch.
     */
    where?: TransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transfers to fetch.
     */
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transfers.
     */
    cursor?: TransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transfers.
     */
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * Transfer findMany
   */
  export type TransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfers to fetch.
     */
    where?: TransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transfers to fetch.
     */
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transfers.
     */
    cursor?: TransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transfers.
     */
    skip?: number
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * Transfer create
   */
  export type TransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * The data needed to create a Transfer.
     */
    data: XOR<TransferCreateInput, TransferUncheckedCreateInput>
  }

  /**
   * Transfer createMany
   */
  export type TransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transfers.
     */
    data: TransferCreateManyInput | TransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transfer createManyAndReturn
   */
  export type TransferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * The data used to create many Transfers.
     */
    data: TransferCreateManyInput | TransferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transfer update
   */
  export type TransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * The data needed to update a Transfer.
     */
    data: XOR<TransferUpdateInput, TransferUncheckedUpdateInput>
    /**
     * Choose, which Transfer to update.
     */
    where: TransferWhereUniqueInput
  }

  /**
   * Transfer updateMany
   */
  export type TransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transfers.
     */
    data: XOR<TransferUpdateManyMutationInput, TransferUncheckedUpdateManyInput>
    /**
     * Filter which Transfers to update
     */
    where?: TransferWhereInput
    /**
     * Limit how many Transfers to update.
     */
    limit?: number
  }

  /**
   * Transfer updateManyAndReturn
   */
  export type TransferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * The data used to update Transfers.
     */
    data: XOR<TransferUpdateManyMutationInput, TransferUncheckedUpdateManyInput>
    /**
     * Filter which Transfers to update
     */
    where?: TransferWhereInput
    /**
     * Limit how many Transfers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transfer upsert
   */
  export type TransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * The filter to search for the Transfer to update in case it exists.
     */
    where: TransferWhereUniqueInput
    /**
     * In case the Transfer found by the `where` argument doesn't exist, create a new Transfer with this data.
     */
    create: XOR<TransferCreateInput, TransferUncheckedCreateInput>
    /**
     * In case the Transfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransferUpdateInput, TransferUncheckedUpdateInput>
  }

  /**
   * Transfer delete
   */
  export type TransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter which Transfer to delete.
     */
    where: TransferWhereUniqueInput
  }

  /**
   * Transfer deleteMany
   */
  export type TransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transfers to delete
     */
    where?: TransferWhereInput
    /**
     * Limit how many Transfers to delete.
     */
    limit?: number
  }

  /**
   * Transfer.fromAccount
   */
  export type Transfer$fromAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Transfer.toAccount
   */
  export type Transfer$toAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Transfer without action
   */
  export type TransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transfer
     */
    omit?: TransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
  }


  /**
   * Model RawEvent
   */

  export type AggregateRawEvent = {
    _count: RawEventCountAggregateOutputType | null
    _min: RawEventMinAggregateOutputType | null
    _max: RawEventMaxAggregateOutputType | null
  }

  export type RawEventMinAggregateOutputType = {
    id: string | null
    provider: $Enums.Provider | null
    snapshotId: string | null
    ts: Date | null
    eventType: string | null
    payloadHash: string | null
  }

  export type RawEventMaxAggregateOutputType = {
    id: string | null
    provider: $Enums.Provider | null
    snapshotId: string | null
    ts: Date | null
    eventType: string | null
    payloadHash: string | null
  }

  export type RawEventCountAggregateOutputType = {
    id: number
    provider: number
    snapshotId: number
    ts: number
    eventType: number
    payloadJson: number
    payloadHash: number
    _all: number
  }


  export type RawEventMinAggregateInputType = {
    id?: true
    provider?: true
    snapshotId?: true
    ts?: true
    eventType?: true
    payloadHash?: true
  }

  export type RawEventMaxAggregateInputType = {
    id?: true
    provider?: true
    snapshotId?: true
    ts?: true
    eventType?: true
    payloadHash?: true
  }

  export type RawEventCountAggregateInputType = {
    id?: true
    provider?: true
    snapshotId?: true
    ts?: true
    eventType?: true
    payloadJson?: true
    payloadHash?: true
    _all?: true
  }

  export type RawEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawEvent to aggregate.
     */
    where?: RawEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawEvents to fetch.
     */
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RawEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RawEvents
    **/
    _count?: true | RawEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RawEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RawEventMaxAggregateInputType
  }

  export type GetRawEventAggregateType<T extends RawEventAggregateArgs> = {
        [P in keyof T & keyof AggregateRawEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRawEvent[P]>
      : GetScalarType<T[P], AggregateRawEvent[P]>
  }




  export type RawEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawEventWhereInput
    orderBy?: RawEventOrderByWithAggregationInput | RawEventOrderByWithAggregationInput[]
    by: RawEventScalarFieldEnum[] | RawEventScalarFieldEnum
    having?: RawEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RawEventCountAggregateInputType | true
    _min?: RawEventMinAggregateInputType
    _max?: RawEventMaxAggregateInputType
  }

  export type RawEventGroupByOutputType = {
    id: string
    provider: $Enums.Provider
    snapshotId: string | null
    ts: Date
    eventType: string
    payloadJson: JsonValue
    payloadHash: string
    _count: RawEventCountAggregateOutputType | null
    _min: RawEventMinAggregateOutputType | null
    _max: RawEventMaxAggregateOutputType | null
  }

  type GetRawEventGroupByPayload<T extends RawEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RawEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RawEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RawEventGroupByOutputType[P]>
            : GetScalarType<T[P], RawEventGroupByOutputType[P]>
        }
      >
    >


  export type RawEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    snapshotId?: boolean
    ts?: boolean
    eventType?: boolean
    payloadJson?: boolean
    payloadHash?: boolean
    snapshot?: boolean | RawEvent$snapshotArgs<ExtArgs>
  }, ExtArgs["result"]["rawEvent"]>

  export type RawEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    snapshotId?: boolean
    ts?: boolean
    eventType?: boolean
    payloadJson?: boolean
    payloadHash?: boolean
    snapshot?: boolean | RawEvent$snapshotArgs<ExtArgs>
  }, ExtArgs["result"]["rawEvent"]>

  export type RawEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    snapshotId?: boolean
    ts?: boolean
    eventType?: boolean
    payloadJson?: boolean
    payloadHash?: boolean
    snapshot?: boolean | RawEvent$snapshotArgs<ExtArgs>
  }, ExtArgs["result"]["rawEvent"]>

  export type RawEventSelectScalar = {
    id?: boolean
    provider?: boolean
    snapshotId?: boolean
    ts?: boolean
    eventType?: boolean
    payloadJson?: boolean
    payloadHash?: boolean
  }

  export type RawEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "snapshotId" | "ts" | "eventType" | "payloadJson" | "payloadHash", ExtArgs["result"]["rawEvent"]>
  export type RawEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | RawEvent$snapshotArgs<ExtArgs>
  }
  export type RawEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | RawEvent$snapshotArgs<ExtArgs>
  }
  export type RawEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | RawEvent$snapshotArgs<ExtArgs>
  }

  export type $RawEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RawEvent"
    objects: {
      snapshot: Prisma.$SnapshotPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: $Enums.Provider
      snapshotId: string | null
      ts: Date
      eventType: string
      payloadJson: Prisma.JsonValue
      payloadHash: string
    }, ExtArgs["result"]["rawEvent"]>
    composites: {}
  }

  type RawEventGetPayload<S extends boolean | null | undefined | RawEventDefaultArgs> = $Result.GetResult<Prisma.$RawEventPayload, S>

  type RawEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RawEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RawEventCountAggregateInputType | true
    }

  export interface RawEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RawEvent'], meta: { name: 'RawEvent' } }
    /**
     * Find zero or one RawEvent that matches the filter.
     * @param {RawEventFindUniqueArgs} args - Arguments to find a RawEvent
     * @example
     * // Get one RawEvent
     * const rawEvent = await prisma.rawEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RawEventFindUniqueArgs>(args: SelectSubset<T, RawEventFindUniqueArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RawEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RawEventFindUniqueOrThrowArgs} args - Arguments to find a RawEvent
     * @example
     * // Get one RawEvent
     * const rawEvent = await prisma.rawEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RawEventFindUniqueOrThrowArgs>(args: SelectSubset<T, RawEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RawEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventFindFirstArgs} args - Arguments to find a RawEvent
     * @example
     * // Get one RawEvent
     * const rawEvent = await prisma.rawEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RawEventFindFirstArgs>(args?: SelectSubset<T, RawEventFindFirstArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RawEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventFindFirstOrThrowArgs} args - Arguments to find a RawEvent
     * @example
     * // Get one RawEvent
     * const rawEvent = await prisma.rawEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RawEventFindFirstOrThrowArgs>(args?: SelectSubset<T, RawEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RawEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RawEvents
     * const rawEvents = await prisma.rawEvent.findMany()
     * 
     * // Get first 10 RawEvents
     * const rawEvents = await prisma.rawEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rawEventWithIdOnly = await prisma.rawEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RawEventFindManyArgs>(args?: SelectSubset<T, RawEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RawEvent.
     * @param {RawEventCreateArgs} args - Arguments to create a RawEvent.
     * @example
     * // Create one RawEvent
     * const RawEvent = await prisma.rawEvent.create({
     *   data: {
     *     // ... data to create a RawEvent
     *   }
     * })
     * 
     */
    create<T extends RawEventCreateArgs>(args: SelectSubset<T, RawEventCreateArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RawEvents.
     * @param {RawEventCreateManyArgs} args - Arguments to create many RawEvents.
     * @example
     * // Create many RawEvents
     * const rawEvent = await prisma.rawEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RawEventCreateManyArgs>(args?: SelectSubset<T, RawEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RawEvents and returns the data saved in the database.
     * @param {RawEventCreateManyAndReturnArgs} args - Arguments to create many RawEvents.
     * @example
     * // Create many RawEvents
     * const rawEvent = await prisma.rawEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RawEvents and only return the `id`
     * const rawEventWithIdOnly = await prisma.rawEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RawEventCreateManyAndReturnArgs>(args?: SelectSubset<T, RawEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RawEvent.
     * @param {RawEventDeleteArgs} args - Arguments to delete one RawEvent.
     * @example
     * // Delete one RawEvent
     * const RawEvent = await prisma.rawEvent.delete({
     *   where: {
     *     // ... filter to delete one RawEvent
     *   }
     * })
     * 
     */
    delete<T extends RawEventDeleteArgs>(args: SelectSubset<T, RawEventDeleteArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RawEvent.
     * @param {RawEventUpdateArgs} args - Arguments to update one RawEvent.
     * @example
     * // Update one RawEvent
     * const rawEvent = await prisma.rawEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RawEventUpdateArgs>(args: SelectSubset<T, RawEventUpdateArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RawEvents.
     * @param {RawEventDeleteManyArgs} args - Arguments to filter RawEvents to delete.
     * @example
     * // Delete a few RawEvents
     * const { count } = await prisma.rawEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RawEventDeleteManyArgs>(args?: SelectSubset<T, RawEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RawEvents
     * const rawEvent = await prisma.rawEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RawEventUpdateManyArgs>(args: SelectSubset<T, RawEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawEvents and returns the data updated in the database.
     * @param {RawEventUpdateManyAndReturnArgs} args - Arguments to update many RawEvents.
     * @example
     * // Update many RawEvents
     * const rawEvent = await prisma.rawEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RawEvents and only return the `id`
     * const rawEventWithIdOnly = await prisma.rawEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RawEventUpdateManyAndReturnArgs>(args: SelectSubset<T, RawEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RawEvent.
     * @param {RawEventUpsertArgs} args - Arguments to update or create a RawEvent.
     * @example
     * // Update or create a RawEvent
     * const rawEvent = await prisma.rawEvent.upsert({
     *   create: {
     *     // ... data to create a RawEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RawEvent we want to update
     *   }
     * })
     */
    upsert<T extends RawEventUpsertArgs>(args: SelectSubset<T, RawEventUpsertArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RawEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventCountArgs} args - Arguments to filter RawEvents to count.
     * @example
     * // Count the number of RawEvents
     * const count = await prisma.rawEvent.count({
     *   where: {
     *     // ... the filter for the RawEvents we want to count
     *   }
     * })
    **/
    count<T extends RawEventCountArgs>(
      args?: Subset<T, RawEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RawEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RawEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RawEventAggregateArgs>(args: Subset<T, RawEventAggregateArgs>): Prisma.PrismaPromise<GetRawEventAggregateType<T>>

    /**
     * Group by RawEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventGroupByArgs} args - Group by arguments.
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
      T extends RawEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RawEventGroupByArgs['orderBy'] }
        : { orderBy?: RawEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RawEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRawEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RawEvent model
   */
  readonly fields: RawEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RawEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RawEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    snapshot<T extends RawEvent$snapshotArgs<ExtArgs> = {}>(args?: Subset<T, RawEvent$snapshotArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RawEvent model
   */
  interface RawEventFieldRefs {
    readonly id: FieldRef<"RawEvent", 'String'>
    readonly provider: FieldRef<"RawEvent", 'Provider'>
    readonly snapshotId: FieldRef<"RawEvent", 'String'>
    readonly ts: FieldRef<"RawEvent", 'DateTime'>
    readonly eventType: FieldRef<"RawEvent", 'String'>
    readonly payloadJson: FieldRef<"RawEvent", 'Json'>
    readonly payloadHash: FieldRef<"RawEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RawEvent findUnique
   */
  export type RawEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawEvent
     */
    omit?: RawEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * Filter, which RawEvent to fetch.
     */
    where: RawEventWhereUniqueInput
  }

  /**
   * RawEvent findUniqueOrThrow
   */
  export type RawEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawEvent
     */
    omit?: RawEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * Filter, which RawEvent to fetch.
     */
    where: RawEventWhereUniqueInput
  }

  /**
   * RawEvent findFirst
   */
  export type RawEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawEvent
     */
    omit?: RawEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * Filter, which RawEvent to fetch.
     */
    where?: RawEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawEvents to fetch.
     */
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawEvents.
     */
    cursor?: RawEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawEvents.
     */
    distinct?: RawEventScalarFieldEnum | RawEventScalarFieldEnum[]
  }

  /**
   * RawEvent findFirstOrThrow
   */
  export type RawEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawEvent
     */
    omit?: RawEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * Filter, which RawEvent to fetch.
     */
    where?: RawEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawEvents to fetch.
     */
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawEvents.
     */
    cursor?: RawEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawEvents.
     */
    distinct?: RawEventScalarFieldEnum | RawEventScalarFieldEnum[]
  }

  /**
   * RawEvent findMany
   */
  export type RawEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawEvent
     */
    omit?: RawEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * Filter, which RawEvents to fetch.
     */
    where?: RawEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawEvents to fetch.
     */
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RawEvents.
     */
    cursor?: RawEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawEvents.
     */
    skip?: number
    distinct?: RawEventScalarFieldEnum | RawEventScalarFieldEnum[]
  }

  /**
   * RawEvent create
   */
  export type RawEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawEvent
     */
    omit?: RawEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * The data needed to create a RawEvent.
     */
    data: XOR<RawEventCreateInput, RawEventUncheckedCreateInput>
  }

  /**
   * RawEvent createMany
   */
  export type RawEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RawEvents.
     */
    data: RawEventCreateManyInput | RawEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RawEvent createManyAndReturn
   */
  export type RawEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RawEvent
     */
    omit?: RawEventOmit<ExtArgs> | null
    /**
     * The data used to create many RawEvents.
     */
    data: RawEventCreateManyInput | RawEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RawEvent update
   */
  export type RawEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawEvent
     */
    omit?: RawEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * The data needed to update a RawEvent.
     */
    data: XOR<RawEventUpdateInput, RawEventUncheckedUpdateInput>
    /**
     * Choose, which RawEvent to update.
     */
    where: RawEventWhereUniqueInput
  }

  /**
   * RawEvent updateMany
   */
  export type RawEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RawEvents.
     */
    data: XOR<RawEventUpdateManyMutationInput, RawEventUncheckedUpdateManyInput>
    /**
     * Filter which RawEvents to update
     */
    where?: RawEventWhereInput
    /**
     * Limit how many RawEvents to update.
     */
    limit?: number
  }

  /**
   * RawEvent updateManyAndReturn
   */
  export type RawEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RawEvent
     */
    omit?: RawEventOmit<ExtArgs> | null
    /**
     * The data used to update RawEvents.
     */
    data: XOR<RawEventUpdateManyMutationInput, RawEventUncheckedUpdateManyInput>
    /**
     * Filter which RawEvents to update
     */
    where?: RawEventWhereInput
    /**
     * Limit how many RawEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RawEvent upsert
   */
  export type RawEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawEvent
     */
    omit?: RawEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * The filter to search for the RawEvent to update in case it exists.
     */
    where: RawEventWhereUniqueInput
    /**
     * In case the RawEvent found by the `where` argument doesn't exist, create a new RawEvent with this data.
     */
    create: XOR<RawEventCreateInput, RawEventUncheckedCreateInput>
    /**
     * In case the RawEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RawEventUpdateInput, RawEventUncheckedUpdateInput>
  }

  /**
   * RawEvent delete
   */
  export type RawEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawEvent
     */
    omit?: RawEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * Filter which RawEvent to delete.
     */
    where: RawEventWhereUniqueInput
  }

  /**
   * RawEvent deleteMany
   */
  export type RawEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawEvents to delete
     */
    where?: RawEventWhereInput
    /**
     * Limit how many RawEvents to delete.
     */
    limit?: number
  }

  /**
   * RawEvent.snapshot
   */
  export type RawEvent$snapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    where?: SnapshotWhereInput
  }

  /**
   * RawEvent without action
   */
  export type RawEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawEvent
     */
    omit?: RawEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
  }


  /**
   * Model PriceDaily
   */

  export type AggregatePriceDaily = {
    _count: PriceDailyCountAggregateOutputType | null
    _avg: PriceDailyAvgAggregateOutputType | null
    _sum: PriceDailySumAggregateOutputType | null
    _min: PriceDailyMinAggregateOutputType | null
    _max: PriceDailyMaxAggregateOutputType | null
  }

  export type PriceDailyAvgAggregateOutputType = {
    priceUsd: Decimal | null
  }

  export type PriceDailySumAggregateOutputType = {
    priceUsd: Decimal | null
  }

  export type PriceDailyMinAggregateOutputType = {
    priceDate: Date | null
    assetOrSymbol: string | null
    priceUsd: Decimal | null
    source: string | null
  }

  export type PriceDailyMaxAggregateOutputType = {
    priceDate: Date | null
    assetOrSymbol: string | null
    priceUsd: Decimal | null
    source: string | null
  }

  export type PriceDailyCountAggregateOutputType = {
    priceDate: number
    assetOrSymbol: number
    priceUsd: number
    source: number
    _all: number
  }


  export type PriceDailyAvgAggregateInputType = {
    priceUsd?: true
  }

  export type PriceDailySumAggregateInputType = {
    priceUsd?: true
  }

  export type PriceDailyMinAggregateInputType = {
    priceDate?: true
    assetOrSymbol?: true
    priceUsd?: true
    source?: true
  }

  export type PriceDailyMaxAggregateInputType = {
    priceDate?: true
    assetOrSymbol?: true
    priceUsd?: true
    source?: true
  }

  export type PriceDailyCountAggregateInputType = {
    priceDate?: true
    assetOrSymbol?: true
    priceUsd?: true
    source?: true
    _all?: true
  }

  export type PriceDailyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceDaily to aggregate.
     */
    where?: PriceDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceDailies to fetch.
     */
    orderBy?: PriceDailyOrderByWithRelationInput | PriceDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceDailies
    **/
    _count?: true | PriceDailyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceDailyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceDailySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceDailyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceDailyMaxAggregateInputType
  }

  export type GetPriceDailyAggregateType<T extends PriceDailyAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceDaily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceDaily[P]>
      : GetScalarType<T[P], AggregatePriceDaily[P]>
  }




  export type PriceDailyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceDailyWhereInput
    orderBy?: PriceDailyOrderByWithAggregationInput | PriceDailyOrderByWithAggregationInput[]
    by: PriceDailyScalarFieldEnum[] | PriceDailyScalarFieldEnum
    having?: PriceDailyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceDailyCountAggregateInputType | true
    _avg?: PriceDailyAvgAggregateInputType
    _sum?: PriceDailySumAggregateInputType
    _min?: PriceDailyMinAggregateInputType
    _max?: PriceDailyMaxAggregateInputType
  }

  export type PriceDailyGroupByOutputType = {
    priceDate: Date
    assetOrSymbol: string
    priceUsd: Decimal
    source: string
    _count: PriceDailyCountAggregateOutputType | null
    _avg: PriceDailyAvgAggregateOutputType | null
    _sum: PriceDailySumAggregateOutputType | null
    _min: PriceDailyMinAggregateOutputType | null
    _max: PriceDailyMaxAggregateOutputType | null
  }

  type GetPriceDailyGroupByPayload<T extends PriceDailyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceDailyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceDailyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceDailyGroupByOutputType[P]>
            : GetScalarType<T[P], PriceDailyGroupByOutputType[P]>
        }
      >
    >


  export type PriceDailySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    priceDate?: boolean
    assetOrSymbol?: boolean
    priceUsd?: boolean
    source?: boolean
  }, ExtArgs["result"]["priceDaily"]>

  export type PriceDailySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    priceDate?: boolean
    assetOrSymbol?: boolean
    priceUsd?: boolean
    source?: boolean
  }, ExtArgs["result"]["priceDaily"]>

  export type PriceDailySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    priceDate?: boolean
    assetOrSymbol?: boolean
    priceUsd?: boolean
    source?: boolean
  }, ExtArgs["result"]["priceDaily"]>

  export type PriceDailySelectScalar = {
    priceDate?: boolean
    assetOrSymbol?: boolean
    priceUsd?: boolean
    source?: boolean
  }

  export type PriceDailyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"priceDate" | "assetOrSymbol" | "priceUsd" | "source", ExtArgs["result"]["priceDaily"]>

  export type $PriceDailyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceDaily"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      priceDate: Date
      assetOrSymbol: string
      priceUsd: Prisma.Decimal
      source: string
    }, ExtArgs["result"]["priceDaily"]>
    composites: {}
  }

  type PriceDailyGetPayload<S extends boolean | null | undefined | PriceDailyDefaultArgs> = $Result.GetResult<Prisma.$PriceDailyPayload, S>

  type PriceDailyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceDailyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceDailyCountAggregateInputType | true
    }

  export interface PriceDailyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceDaily'], meta: { name: 'PriceDaily' } }
    /**
     * Find zero or one PriceDaily that matches the filter.
     * @param {PriceDailyFindUniqueArgs} args - Arguments to find a PriceDaily
     * @example
     * // Get one PriceDaily
     * const priceDaily = await prisma.priceDaily.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceDailyFindUniqueArgs>(args: SelectSubset<T, PriceDailyFindUniqueArgs<ExtArgs>>): Prisma__PriceDailyClient<$Result.GetResult<Prisma.$PriceDailyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceDaily that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceDailyFindUniqueOrThrowArgs} args - Arguments to find a PriceDaily
     * @example
     * // Get one PriceDaily
     * const priceDaily = await prisma.priceDaily.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceDailyFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceDailyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceDailyClient<$Result.GetResult<Prisma.$PriceDailyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceDaily that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceDailyFindFirstArgs} args - Arguments to find a PriceDaily
     * @example
     * // Get one PriceDaily
     * const priceDaily = await prisma.priceDaily.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceDailyFindFirstArgs>(args?: SelectSubset<T, PriceDailyFindFirstArgs<ExtArgs>>): Prisma__PriceDailyClient<$Result.GetResult<Prisma.$PriceDailyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceDaily that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceDailyFindFirstOrThrowArgs} args - Arguments to find a PriceDaily
     * @example
     * // Get one PriceDaily
     * const priceDaily = await prisma.priceDaily.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceDailyFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceDailyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceDailyClient<$Result.GetResult<Prisma.$PriceDailyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceDailies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceDailyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceDailies
     * const priceDailies = await prisma.priceDaily.findMany()
     * 
     * // Get first 10 PriceDailies
     * const priceDailies = await prisma.priceDaily.findMany({ take: 10 })
     * 
     * // Only select the `priceDate`
     * const priceDailyWithPriceDateOnly = await prisma.priceDaily.findMany({ select: { priceDate: true } })
     * 
     */
    findMany<T extends PriceDailyFindManyArgs>(args?: SelectSubset<T, PriceDailyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceDailyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceDaily.
     * @param {PriceDailyCreateArgs} args - Arguments to create a PriceDaily.
     * @example
     * // Create one PriceDaily
     * const PriceDaily = await prisma.priceDaily.create({
     *   data: {
     *     // ... data to create a PriceDaily
     *   }
     * })
     * 
     */
    create<T extends PriceDailyCreateArgs>(args: SelectSubset<T, PriceDailyCreateArgs<ExtArgs>>): Prisma__PriceDailyClient<$Result.GetResult<Prisma.$PriceDailyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceDailies.
     * @param {PriceDailyCreateManyArgs} args - Arguments to create many PriceDailies.
     * @example
     * // Create many PriceDailies
     * const priceDaily = await prisma.priceDaily.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceDailyCreateManyArgs>(args?: SelectSubset<T, PriceDailyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceDailies and returns the data saved in the database.
     * @param {PriceDailyCreateManyAndReturnArgs} args - Arguments to create many PriceDailies.
     * @example
     * // Create many PriceDailies
     * const priceDaily = await prisma.priceDaily.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceDailies and only return the `priceDate`
     * const priceDailyWithPriceDateOnly = await prisma.priceDaily.createManyAndReturn({
     *   select: { priceDate: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceDailyCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceDailyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceDailyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PriceDaily.
     * @param {PriceDailyDeleteArgs} args - Arguments to delete one PriceDaily.
     * @example
     * // Delete one PriceDaily
     * const PriceDaily = await prisma.priceDaily.delete({
     *   where: {
     *     // ... filter to delete one PriceDaily
     *   }
     * })
     * 
     */
    delete<T extends PriceDailyDeleteArgs>(args: SelectSubset<T, PriceDailyDeleteArgs<ExtArgs>>): Prisma__PriceDailyClient<$Result.GetResult<Prisma.$PriceDailyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceDaily.
     * @param {PriceDailyUpdateArgs} args - Arguments to update one PriceDaily.
     * @example
     * // Update one PriceDaily
     * const priceDaily = await prisma.priceDaily.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceDailyUpdateArgs>(args: SelectSubset<T, PriceDailyUpdateArgs<ExtArgs>>): Prisma__PriceDailyClient<$Result.GetResult<Prisma.$PriceDailyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceDailies.
     * @param {PriceDailyDeleteManyArgs} args - Arguments to filter PriceDailies to delete.
     * @example
     * // Delete a few PriceDailies
     * const { count } = await prisma.priceDaily.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceDailyDeleteManyArgs>(args?: SelectSubset<T, PriceDailyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceDailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceDailyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceDailies
     * const priceDaily = await prisma.priceDaily.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceDailyUpdateManyArgs>(args: SelectSubset<T, PriceDailyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceDailies and returns the data updated in the database.
     * @param {PriceDailyUpdateManyAndReturnArgs} args - Arguments to update many PriceDailies.
     * @example
     * // Update many PriceDailies
     * const priceDaily = await prisma.priceDaily.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PriceDailies and only return the `priceDate`
     * const priceDailyWithPriceDateOnly = await prisma.priceDaily.updateManyAndReturn({
     *   select: { priceDate: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriceDailyUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceDailyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceDailyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PriceDaily.
     * @param {PriceDailyUpsertArgs} args - Arguments to update or create a PriceDaily.
     * @example
     * // Update or create a PriceDaily
     * const priceDaily = await prisma.priceDaily.upsert({
     *   create: {
     *     // ... data to create a PriceDaily
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceDaily we want to update
     *   }
     * })
     */
    upsert<T extends PriceDailyUpsertArgs>(args: SelectSubset<T, PriceDailyUpsertArgs<ExtArgs>>): Prisma__PriceDailyClient<$Result.GetResult<Prisma.$PriceDailyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceDailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceDailyCountArgs} args - Arguments to filter PriceDailies to count.
     * @example
     * // Count the number of PriceDailies
     * const count = await prisma.priceDaily.count({
     *   where: {
     *     // ... the filter for the PriceDailies we want to count
     *   }
     * })
    **/
    count<T extends PriceDailyCountArgs>(
      args?: Subset<T, PriceDailyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceDailyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceDaily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceDailyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceDailyAggregateArgs>(args: Subset<T, PriceDailyAggregateArgs>): Prisma.PrismaPromise<GetPriceDailyAggregateType<T>>

    /**
     * Group by PriceDaily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceDailyGroupByArgs} args - Group by arguments.
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
      T extends PriceDailyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceDailyGroupByArgs['orderBy'] }
        : { orderBy?: PriceDailyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceDailyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceDailyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceDaily model
   */
  readonly fields: PriceDailyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceDaily.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceDailyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PriceDaily model
   */
  interface PriceDailyFieldRefs {
    readonly priceDate: FieldRef<"PriceDaily", 'DateTime'>
    readonly assetOrSymbol: FieldRef<"PriceDaily", 'String'>
    readonly priceUsd: FieldRef<"PriceDaily", 'Decimal'>
    readonly source: FieldRef<"PriceDaily", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PriceDaily findUnique
   */
  export type PriceDailyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceDaily
     */
    select?: PriceDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceDaily
     */
    omit?: PriceDailyOmit<ExtArgs> | null
    /**
     * Filter, which PriceDaily to fetch.
     */
    where: PriceDailyWhereUniqueInput
  }

  /**
   * PriceDaily findUniqueOrThrow
   */
  export type PriceDailyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceDaily
     */
    select?: PriceDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceDaily
     */
    omit?: PriceDailyOmit<ExtArgs> | null
    /**
     * Filter, which PriceDaily to fetch.
     */
    where: PriceDailyWhereUniqueInput
  }

  /**
   * PriceDaily findFirst
   */
  export type PriceDailyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceDaily
     */
    select?: PriceDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceDaily
     */
    omit?: PriceDailyOmit<ExtArgs> | null
    /**
     * Filter, which PriceDaily to fetch.
     */
    where?: PriceDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceDailies to fetch.
     */
    orderBy?: PriceDailyOrderByWithRelationInput | PriceDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceDailies.
     */
    cursor?: PriceDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceDailies.
     */
    distinct?: PriceDailyScalarFieldEnum | PriceDailyScalarFieldEnum[]
  }

  /**
   * PriceDaily findFirstOrThrow
   */
  export type PriceDailyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceDaily
     */
    select?: PriceDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceDaily
     */
    omit?: PriceDailyOmit<ExtArgs> | null
    /**
     * Filter, which PriceDaily to fetch.
     */
    where?: PriceDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceDailies to fetch.
     */
    orderBy?: PriceDailyOrderByWithRelationInput | PriceDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceDailies.
     */
    cursor?: PriceDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceDailies.
     */
    distinct?: PriceDailyScalarFieldEnum | PriceDailyScalarFieldEnum[]
  }

  /**
   * PriceDaily findMany
   */
  export type PriceDailyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceDaily
     */
    select?: PriceDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceDaily
     */
    omit?: PriceDailyOmit<ExtArgs> | null
    /**
     * Filter, which PriceDailies to fetch.
     */
    where?: PriceDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceDailies to fetch.
     */
    orderBy?: PriceDailyOrderByWithRelationInput | PriceDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceDailies.
     */
    cursor?: PriceDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceDailies.
     */
    skip?: number
    distinct?: PriceDailyScalarFieldEnum | PriceDailyScalarFieldEnum[]
  }

  /**
   * PriceDaily create
   */
  export type PriceDailyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceDaily
     */
    select?: PriceDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceDaily
     */
    omit?: PriceDailyOmit<ExtArgs> | null
    /**
     * The data needed to create a PriceDaily.
     */
    data: XOR<PriceDailyCreateInput, PriceDailyUncheckedCreateInput>
  }

  /**
   * PriceDaily createMany
   */
  export type PriceDailyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceDailies.
     */
    data: PriceDailyCreateManyInput | PriceDailyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceDaily createManyAndReturn
   */
  export type PriceDailyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceDaily
     */
    select?: PriceDailySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceDaily
     */
    omit?: PriceDailyOmit<ExtArgs> | null
    /**
     * The data used to create many PriceDailies.
     */
    data: PriceDailyCreateManyInput | PriceDailyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceDaily update
   */
  export type PriceDailyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceDaily
     */
    select?: PriceDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceDaily
     */
    omit?: PriceDailyOmit<ExtArgs> | null
    /**
     * The data needed to update a PriceDaily.
     */
    data: XOR<PriceDailyUpdateInput, PriceDailyUncheckedUpdateInput>
    /**
     * Choose, which PriceDaily to update.
     */
    where: PriceDailyWhereUniqueInput
  }

  /**
   * PriceDaily updateMany
   */
  export type PriceDailyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceDailies.
     */
    data: XOR<PriceDailyUpdateManyMutationInput, PriceDailyUncheckedUpdateManyInput>
    /**
     * Filter which PriceDailies to update
     */
    where?: PriceDailyWhereInput
    /**
     * Limit how many PriceDailies to update.
     */
    limit?: number
  }

  /**
   * PriceDaily updateManyAndReturn
   */
  export type PriceDailyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceDaily
     */
    select?: PriceDailySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceDaily
     */
    omit?: PriceDailyOmit<ExtArgs> | null
    /**
     * The data used to update PriceDailies.
     */
    data: XOR<PriceDailyUpdateManyMutationInput, PriceDailyUncheckedUpdateManyInput>
    /**
     * Filter which PriceDailies to update
     */
    where?: PriceDailyWhereInput
    /**
     * Limit how many PriceDailies to update.
     */
    limit?: number
  }

  /**
   * PriceDaily upsert
   */
  export type PriceDailyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceDaily
     */
    select?: PriceDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceDaily
     */
    omit?: PriceDailyOmit<ExtArgs> | null
    /**
     * The filter to search for the PriceDaily to update in case it exists.
     */
    where: PriceDailyWhereUniqueInput
    /**
     * In case the PriceDaily found by the `where` argument doesn't exist, create a new PriceDaily with this data.
     */
    create: XOR<PriceDailyCreateInput, PriceDailyUncheckedCreateInput>
    /**
     * In case the PriceDaily was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceDailyUpdateInput, PriceDailyUncheckedUpdateInput>
  }

  /**
   * PriceDaily delete
   */
  export type PriceDailyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceDaily
     */
    select?: PriceDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceDaily
     */
    omit?: PriceDailyOmit<ExtArgs> | null
    /**
     * Filter which PriceDaily to delete.
     */
    where: PriceDailyWhereUniqueInput
  }

  /**
   * PriceDaily deleteMany
   */
  export type PriceDailyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceDailies to delete
     */
    where?: PriceDailyWhereInput
    /**
     * Limit how many PriceDailies to delete.
     */
    limit?: number
  }

  /**
   * PriceDaily without action
   */
  export type PriceDailyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceDaily
     */
    select?: PriceDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceDaily
     */
    omit?: PriceDailyOmit<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    label: 'label',
    baseCurrency: 'baseCurrency',
    createdAt: 'createdAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SnapshotScalarFieldEnum: {
    id: 'id',
    snapshotDate: 'snapshotDate',
    createdAt: 'createdAt',
    source: 'source',
    status: 'status',
    notes: 'notes'
  };

  export type SnapshotScalarFieldEnum = (typeof SnapshotScalarFieldEnum)[keyof typeof SnapshotScalarFieldEnum]


  export const ProviderSyncRunScalarFieldEnum: {
    id: 'id',
    snapshotId: 'snapshotId',
    provider: 'provider',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    status: 'status',
    errorMessage: 'errorMessage'
  };

  export type ProviderSyncRunScalarFieldEnum = (typeof ProviderSyncRunScalarFieldEnum)[keyof typeof ProviderSyncRunScalarFieldEnum]


  export const AccountBalanceScalarFieldEnum: {
    snapshotId: 'snapshotId',
    accountId: 'accountId',
    asset: 'asset',
    free: 'free',
    locked: 'locked',
    usdValue: 'usdValue'
  };

  export type AccountBalanceScalarFieldEnum = (typeof AccountBalanceScalarFieldEnum)[keyof typeof AccountBalanceScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    snapshotId: 'snapshotId',
    accountId: 'accountId',
    symbol: 'symbol',
    side: 'side',
    size: 'size',
    entryPrice: 'entryPrice',
    markPrice: 'markPrice',
    pnlUnrealizedUsd: 'pnlUnrealizedUsd'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const TransferScalarFieldEnum: {
    id: 'id',
    ts: 'ts',
    fromAccountId: 'fromAccountId',
    toAccountId: 'toAccountId',
    asset: 'asset',
    amount: 'amount',
    fee: 'fee',
    txid: 'txid',
    note: 'note'
  };

  export type TransferScalarFieldEnum = (typeof TransferScalarFieldEnum)[keyof typeof TransferScalarFieldEnum]


  export const RawEventScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    snapshotId: 'snapshotId',
    ts: 'ts',
    eventType: 'eventType',
    payloadJson: 'payloadJson',
    payloadHash: 'payloadHash'
  };

  export type RawEventScalarFieldEnum = (typeof RawEventScalarFieldEnum)[keyof typeof RawEventScalarFieldEnum]


  export const PriceDailyScalarFieldEnum: {
    priceDate: 'priceDate',
    assetOrSymbol: 'assetOrSymbol',
    priceUsd: 'priceUsd',
    source: 'source'
  };

  export type PriceDailyScalarFieldEnum = (typeof PriceDailyScalarFieldEnum)[keyof typeof PriceDailyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'Provider[]'
   */
  export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SnapshotSource'
   */
  export type EnumSnapshotSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SnapshotSource'>
    


  /**
   * Reference to a field of type 'SnapshotSource[]'
   */
  export type ListEnumSnapshotSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SnapshotSource[]'>
    


  /**
   * Reference to a field of type 'SnapshotStatus'
   */
  export type EnumSnapshotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SnapshotStatus'>
    


  /**
   * Reference to a field of type 'SnapshotStatus[]'
   */
  export type ListEnumSnapshotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SnapshotStatus[]'>
    


  /**
   * Reference to a field of type 'SyncRunStatus'
   */
  export type EnumSyncRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SyncRunStatus'>
    


  /**
   * Reference to a field of type 'SyncRunStatus[]'
   */
  export type ListEnumSyncRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SyncRunStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PositionSide'
   */
  export type EnumPositionSideFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PositionSide'>
    


  /**
   * Reference to a field of type 'PositionSide[]'
   */
  export type ListEnumPositionSideFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PositionSide[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: UuidFilter<"Account"> | string
    provider?: EnumProviderFilter<"Account"> | $Enums.Provider
    label?: StringFilter<"Account"> | string
    baseCurrency?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    balances?: AccountBalanceListRelationFilter
    positions?: PositionListRelationFilter
    transfersFrom?: TransferListRelationFilter
    transfersTo?: TransferListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    label?: SortOrder
    baseCurrency?: SortOrder
    createdAt?: SortOrder
    balances?: AccountBalanceOrderByRelationAggregateInput
    positions?: PositionOrderByRelationAggregateInput
    transfersFrom?: TransferOrderByRelationAggregateInput
    transfersTo?: TransferOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    provider?: EnumProviderFilter<"Account"> | $Enums.Provider
    label?: StringFilter<"Account"> | string
    baseCurrency?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    balances?: AccountBalanceListRelationFilter
    positions?: PositionListRelationFilter
    transfersFrom?: TransferListRelationFilter
    transfersTo?: TransferListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    label?: SortOrder
    baseCurrency?: SortOrder
    createdAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Account"> | string
    provider?: EnumProviderWithAggregatesFilter<"Account"> | $Enums.Provider
    label?: StringWithAggregatesFilter<"Account"> | string
    baseCurrency?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SnapshotWhereInput = {
    AND?: SnapshotWhereInput | SnapshotWhereInput[]
    OR?: SnapshotWhereInput[]
    NOT?: SnapshotWhereInput | SnapshotWhereInput[]
    id?: UuidFilter<"Snapshot"> | string
    snapshotDate?: DateTimeFilter<"Snapshot"> | Date | string
    createdAt?: DateTimeFilter<"Snapshot"> | Date | string
    source?: EnumSnapshotSourceFilter<"Snapshot"> | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFilter<"Snapshot"> | $Enums.SnapshotStatus
    notes?: StringNullableFilter<"Snapshot"> | string | null
    providerSyncRuns?: ProviderSyncRunListRelationFilter
    balances?: AccountBalanceListRelationFilter
    positions?: PositionListRelationFilter
    rawEvents?: RawEventListRelationFilter
  }

  export type SnapshotOrderByWithRelationInput = {
    id?: SortOrder
    snapshotDate?: SortOrder
    createdAt?: SortOrder
    source?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    providerSyncRuns?: ProviderSyncRunOrderByRelationAggregateInput
    balances?: AccountBalanceOrderByRelationAggregateInput
    positions?: PositionOrderByRelationAggregateInput
    rawEvents?: RawEventOrderByRelationAggregateInput
  }

  export type SnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    snapshotDate?: Date | string
    AND?: SnapshotWhereInput | SnapshotWhereInput[]
    OR?: SnapshotWhereInput[]
    NOT?: SnapshotWhereInput | SnapshotWhereInput[]
    createdAt?: DateTimeFilter<"Snapshot"> | Date | string
    source?: EnumSnapshotSourceFilter<"Snapshot"> | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFilter<"Snapshot"> | $Enums.SnapshotStatus
    notes?: StringNullableFilter<"Snapshot"> | string | null
    providerSyncRuns?: ProviderSyncRunListRelationFilter
    balances?: AccountBalanceListRelationFilter
    positions?: PositionListRelationFilter
    rawEvents?: RawEventListRelationFilter
  }, "id" | "snapshotDate">

  export type SnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    snapshotDate?: SortOrder
    createdAt?: SortOrder
    source?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: SnapshotCountOrderByAggregateInput
    _max?: SnapshotMaxOrderByAggregateInput
    _min?: SnapshotMinOrderByAggregateInput
  }

  export type SnapshotScalarWhereWithAggregatesInput = {
    AND?: SnapshotScalarWhereWithAggregatesInput | SnapshotScalarWhereWithAggregatesInput[]
    OR?: SnapshotScalarWhereWithAggregatesInput[]
    NOT?: SnapshotScalarWhereWithAggregatesInput | SnapshotScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Snapshot"> | string
    snapshotDate?: DateTimeWithAggregatesFilter<"Snapshot"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Snapshot"> | Date | string
    source?: EnumSnapshotSourceWithAggregatesFilter<"Snapshot"> | $Enums.SnapshotSource
    status?: EnumSnapshotStatusWithAggregatesFilter<"Snapshot"> | $Enums.SnapshotStatus
    notes?: StringNullableWithAggregatesFilter<"Snapshot"> | string | null
  }

  export type ProviderSyncRunWhereInput = {
    AND?: ProviderSyncRunWhereInput | ProviderSyncRunWhereInput[]
    OR?: ProviderSyncRunWhereInput[]
    NOT?: ProviderSyncRunWhereInput | ProviderSyncRunWhereInput[]
    id?: UuidFilter<"ProviderSyncRun"> | string
    snapshotId?: UuidFilter<"ProviderSyncRun"> | string
    provider?: EnumProviderFilter<"ProviderSyncRun"> | $Enums.Provider
    startedAt?: DateTimeFilter<"ProviderSyncRun"> | Date | string
    finishedAt?: DateTimeNullableFilter<"ProviderSyncRun"> | Date | string | null
    status?: EnumSyncRunStatusFilter<"ProviderSyncRun"> | $Enums.SyncRunStatus
    errorMessage?: StringNullableFilter<"ProviderSyncRun"> | string | null
    snapshot?: XOR<SnapshotScalarRelationFilter, SnapshotWhereInput>
  }

  export type ProviderSyncRunOrderByWithRelationInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    provider?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    snapshot?: SnapshotOrderByWithRelationInput
  }

  export type ProviderSyncRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    snapshotId_provider?: ProviderSyncRunSnapshotIdProviderCompoundUniqueInput
    AND?: ProviderSyncRunWhereInput | ProviderSyncRunWhereInput[]
    OR?: ProviderSyncRunWhereInput[]
    NOT?: ProviderSyncRunWhereInput | ProviderSyncRunWhereInput[]
    snapshotId?: UuidFilter<"ProviderSyncRun"> | string
    provider?: EnumProviderFilter<"ProviderSyncRun"> | $Enums.Provider
    startedAt?: DateTimeFilter<"ProviderSyncRun"> | Date | string
    finishedAt?: DateTimeNullableFilter<"ProviderSyncRun"> | Date | string | null
    status?: EnumSyncRunStatusFilter<"ProviderSyncRun"> | $Enums.SyncRunStatus
    errorMessage?: StringNullableFilter<"ProviderSyncRun"> | string | null
    snapshot?: XOR<SnapshotScalarRelationFilter, SnapshotWhereInput>
  }, "id" | "snapshotId_provider">

  export type ProviderSyncRunOrderByWithAggregationInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    provider?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    _count?: ProviderSyncRunCountOrderByAggregateInput
    _max?: ProviderSyncRunMaxOrderByAggregateInput
    _min?: ProviderSyncRunMinOrderByAggregateInput
  }

  export type ProviderSyncRunScalarWhereWithAggregatesInput = {
    AND?: ProviderSyncRunScalarWhereWithAggregatesInput | ProviderSyncRunScalarWhereWithAggregatesInput[]
    OR?: ProviderSyncRunScalarWhereWithAggregatesInput[]
    NOT?: ProviderSyncRunScalarWhereWithAggregatesInput | ProviderSyncRunScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProviderSyncRun"> | string
    snapshotId?: UuidWithAggregatesFilter<"ProviderSyncRun"> | string
    provider?: EnumProviderWithAggregatesFilter<"ProviderSyncRun"> | $Enums.Provider
    startedAt?: DateTimeWithAggregatesFilter<"ProviderSyncRun"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"ProviderSyncRun"> | Date | string | null
    status?: EnumSyncRunStatusWithAggregatesFilter<"ProviderSyncRun"> | $Enums.SyncRunStatus
    errorMessage?: StringNullableWithAggregatesFilter<"ProviderSyncRun"> | string | null
  }

  export type AccountBalanceWhereInput = {
    AND?: AccountBalanceWhereInput | AccountBalanceWhereInput[]
    OR?: AccountBalanceWhereInput[]
    NOT?: AccountBalanceWhereInput | AccountBalanceWhereInput[]
    snapshotId?: UuidFilter<"AccountBalance"> | string
    accountId?: UuidFilter<"AccountBalance"> | string
    asset?: StringFilter<"AccountBalance"> | string
    free?: DecimalFilter<"AccountBalance"> | Decimal | DecimalJsLike | number | string
    locked?: DecimalFilter<"AccountBalance"> | Decimal | DecimalJsLike | number | string
    usdValue?: DecimalNullableFilter<"AccountBalance"> | Decimal | DecimalJsLike | number | string | null
    snapshot?: XOR<SnapshotScalarRelationFilter, SnapshotWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type AccountBalanceOrderByWithRelationInput = {
    snapshotId?: SortOrder
    accountId?: SortOrder
    asset?: SortOrder
    free?: SortOrder
    locked?: SortOrder
    usdValue?: SortOrderInput | SortOrder
    snapshot?: SnapshotOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
  }

  export type AccountBalanceWhereUniqueInput = Prisma.AtLeast<{
    snapshotId_accountId_asset?: AccountBalanceSnapshotIdAccountIdAssetCompoundUniqueInput
    AND?: AccountBalanceWhereInput | AccountBalanceWhereInput[]
    OR?: AccountBalanceWhereInput[]
    NOT?: AccountBalanceWhereInput | AccountBalanceWhereInput[]
    snapshotId?: UuidFilter<"AccountBalance"> | string
    accountId?: UuidFilter<"AccountBalance"> | string
    asset?: StringFilter<"AccountBalance"> | string
    free?: DecimalFilter<"AccountBalance"> | Decimal | DecimalJsLike | number | string
    locked?: DecimalFilter<"AccountBalance"> | Decimal | DecimalJsLike | number | string
    usdValue?: DecimalNullableFilter<"AccountBalance"> | Decimal | DecimalJsLike | number | string | null
    snapshot?: XOR<SnapshotScalarRelationFilter, SnapshotWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "snapshotId_accountId_asset">

  export type AccountBalanceOrderByWithAggregationInput = {
    snapshotId?: SortOrder
    accountId?: SortOrder
    asset?: SortOrder
    free?: SortOrder
    locked?: SortOrder
    usdValue?: SortOrderInput | SortOrder
    _count?: AccountBalanceCountOrderByAggregateInput
    _avg?: AccountBalanceAvgOrderByAggregateInput
    _max?: AccountBalanceMaxOrderByAggregateInput
    _min?: AccountBalanceMinOrderByAggregateInput
    _sum?: AccountBalanceSumOrderByAggregateInput
  }

  export type AccountBalanceScalarWhereWithAggregatesInput = {
    AND?: AccountBalanceScalarWhereWithAggregatesInput | AccountBalanceScalarWhereWithAggregatesInput[]
    OR?: AccountBalanceScalarWhereWithAggregatesInput[]
    NOT?: AccountBalanceScalarWhereWithAggregatesInput | AccountBalanceScalarWhereWithAggregatesInput[]
    snapshotId?: UuidWithAggregatesFilter<"AccountBalance"> | string
    accountId?: UuidWithAggregatesFilter<"AccountBalance"> | string
    asset?: StringWithAggregatesFilter<"AccountBalance"> | string
    free?: DecimalWithAggregatesFilter<"AccountBalance"> | Decimal | DecimalJsLike | number | string
    locked?: DecimalWithAggregatesFilter<"AccountBalance"> | Decimal | DecimalJsLike | number | string
    usdValue?: DecimalNullableWithAggregatesFilter<"AccountBalance"> | Decimal | DecimalJsLike | number | string | null
  }

  export type PositionWhereInput = {
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    snapshotId?: UuidFilter<"Position"> | string
    accountId?: UuidFilter<"Position"> | string
    symbol?: StringFilter<"Position"> | string
    side?: EnumPositionSideFilter<"Position"> | $Enums.PositionSide
    size?: DecimalFilter<"Position"> | Decimal | DecimalJsLike | number | string
    entryPrice?: DecimalNullableFilter<"Position"> | Decimal | DecimalJsLike | number | string | null
    markPrice?: DecimalNullableFilter<"Position"> | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: DecimalNullableFilter<"Position"> | Decimal | DecimalJsLike | number | string | null
    snapshot?: XOR<SnapshotScalarRelationFilter, SnapshotWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type PositionOrderByWithRelationInput = {
    snapshotId?: SortOrder
    accountId?: SortOrder
    symbol?: SortOrder
    side?: SortOrder
    size?: SortOrder
    entryPrice?: SortOrderInput | SortOrder
    markPrice?: SortOrderInput | SortOrder
    pnlUnrealizedUsd?: SortOrderInput | SortOrder
    snapshot?: SnapshotOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
  }

  export type PositionWhereUniqueInput = Prisma.AtLeast<{
    snapshotId_accountId_symbol_side?: PositionSnapshotIdAccountIdSymbolSideCompoundUniqueInput
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    snapshotId?: UuidFilter<"Position"> | string
    accountId?: UuidFilter<"Position"> | string
    symbol?: StringFilter<"Position"> | string
    side?: EnumPositionSideFilter<"Position"> | $Enums.PositionSide
    size?: DecimalFilter<"Position"> | Decimal | DecimalJsLike | number | string
    entryPrice?: DecimalNullableFilter<"Position"> | Decimal | DecimalJsLike | number | string | null
    markPrice?: DecimalNullableFilter<"Position"> | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: DecimalNullableFilter<"Position"> | Decimal | DecimalJsLike | number | string | null
    snapshot?: XOR<SnapshotScalarRelationFilter, SnapshotWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "snapshotId_accountId_symbol_side">

  export type PositionOrderByWithAggregationInput = {
    snapshotId?: SortOrder
    accountId?: SortOrder
    symbol?: SortOrder
    side?: SortOrder
    size?: SortOrder
    entryPrice?: SortOrderInput | SortOrder
    markPrice?: SortOrderInput | SortOrder
    pnlUnrealizedUsd?: SortOrderInput | SortOrder
    _count?: PositionCountOrderByAggregateInput
    _avg?: PositionAvgOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
    _sum?: PositionSumOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    OR?: PositionScalarWhereWithAggregatesInput[]
    NOT?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    snapshotId?: UuidWithAggregatesFilter<"Position"> | string
    accountId?: UuidWithAggregatesFilter<"Position"> | string
    symbol?: StringWithAggregatesFilter<"Position"> | string
    side?: EnumPositionSideWithAggregatesFilter<"Position"> | $Enums.PositionSide
    size?: DecimalWithAggregatesFilter<"Position"> | Decimal | DecimalJsLike | number | string
    entryPrice?: DecimalNullableWithAggregatesFilter<"Position"> | Decimal | DecimalJsLike | number | string | null
    markPrice?: DecimalNullableWithAggregatesFilter<"Position"> | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: DecimalNullableWithAggregatesFilter<"Position"> | Decimal | DecimalJsLike | number | string | null
  }

  export type TransferWhereInput = {
    AND?: TransferWhereInput | TransferWhereInput[]
    OR?: TransferWhereInput[]
    NOT?: TransferWhereInput | TransferWhereInput[]
    id?: UuidFilter<"Transfer"> | string
    ts?: DateTimeFilter<"Transfer"> | Date | string
    fromAccountId?: UuidNullableFilter<"Transfer"> | string | null
    toAccountId?: UuidNullableFilter<"Transfer"> | string | null
    asset?: StringFilter<"Transfer"> | string
    amount?: DecimalFilter<"Transfer"> | Decimal | DecimalJsLike | number | string
    fee?: DecimalNullableFilter<"Transfer"> | Decimal | DecimalJsLike | number | string | null
    txid?: StringNullableFilter<"Transfer"> | string | null
    note?: StringNullableFilter<"Transfer"> | string | null
    fromAccount?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    toAccount?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }

  export type TransferOrderByWithRelationInput = {
    id?: SortOrder
    ts?: SortOrder
    fromAccountId?: SortOrderInput | SortOrder
    toAccountId?: SortOrderInput | SortOrder
    asset?: SortOrder
    amount?: SortOrder
    fee?: SortOrderInput | SortOrder
    txid?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    fromAccount?: AccountOrderByWithRelationInput
    toAccount?: AccountOrderByWithRelationInput
  }

  export type TransferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    txid?: string
    AND?: TransferWhereInput | TransferWhereInput[]
    OR?: TransferWhereInput[]
    NOT?: TransferWhereInput | TransferWhereInput[]
    ts?: DateTimeFilter<"Transfer"> | Date | string
    fromAccountId?: UuidNullableFilter<"Transfer"> | string | null
    toAccountId?: UuidNullableFilter<"Transfer"> | string | null
    asset?: StringFilter<"Transfer"> | string
    amount?: DecimalFilter<"Transfer"> | Decimal | DecimalJsLike | number | string
    fee?: DecimalNullableFilter<"Transfer"> | Decimal | DecimalJsLike | number | string | null
    note?: StringNullableFilter<"Transfer"> | string | null
    fromAccount?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    toAccount?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }, "id" | "txid">

  export type TransferOrderByWithAggregationInput = {
    id?: SortOrder
    ts?: SortOrder
    fromAccountId?: SortOrderInput | SortOrder
    toAccountId?: SortOrderInput | SortOrder
    asset?: SortOrder
    amount?: SortOrder
    fee?: SortOrderInput | SortOrder
    txid?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    _count?: TransferCountOrderByAggregateInput
    _avg?: TransferAvgOrderByAggregateInput
    _max?: TransferMaxOrderByAggregateInput
    _min?: TransferMinOrderByAggregateInput
    _sum?: TransferSumOrderByAggregateInput
  }

  export type TransferScalarWhereWithAggregatesInput = {
    AND?: TransferScalarWhereWithAggregatesInput | TransferScalarWhereWithAggregatesInput[]
    OR?: TransferScalarWhereWithAggregatesInput[]
    NOT?: TransferScalarWhereWithAggregatesInput | TransferScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Transfer"> | string
    ts?: DateTimeWithAggregatesFilter<"Transfer"> | Date | string
    fromAccountId?: UuidNullableWithAggregatesFilter<"Transfer"> | string | null
    toAccountId?: UuidNullableWithAggregatesFilter<"Transfer"> | string | null
    asset?: StringWithAggregatesFilter<"Transfer"> | string
    amount?: DecimalWithAggregatesFilter<"Transfer"> | Decimal | DecimalJsLike | number | string
    fee?: DecimalNullableWithAggregatesFilter<"Transfer"> | Decimal | DecimalJsLike | number | string | null
    txid?: StringNullableWithAggregatesFilter<"Transfer"> | string | null
    note?: StringNullableWithAggregatesFilter<"Transfer"> | string | null
  }

  export type RawEventWhereInput = {
    AND?: RawEventWhereInput | RawEventWhereInput[]
    OR?: RawEventWhereInput[]
    NOT?: RawEventWhereInput | RawEventWhereInput[]
    id?: UuidFilter<"RawEvent"> | string
    provider?: EnumProviderFilter<"RawEvent"> | $Enums.Provider
    snapshotId?: UuidNullableFilter<"RawEvent"> | string | null
    ts?: DateTimeFilter<"RawEvent"> | Date | string
    eventType?: StringFilter<"RawEvent"> | string
    payloadJson?: JsonFilter<"RawEvent">
    payloadHash?: StringFilter<"RawEvent"> | string
    snapshot?: XOR<SnapshotNullableScalarRelationFilter, SnapshotWhereInput> | null
  }

  export type RawEventOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    snapshotId?: SortOrderInput | SortOrder
    ts?: SortOrder
    eventType?: SortOrder
    payloadJson?: SortOrder
    payloadHash?: SortOrder
    snapshot?: SnapshotOrderByWithRelationInput
  }

  export type RawEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RawEventWhereInput | RawEventWhereInput[]
    OR?: RawEventWhereInput[]
    NOT?: RawEventWhereInput | RawEventWhereInput[]
    provider?: EnumProviderFilter<"RawEvent"> | $Enums.Provider
    snapshotId?: UuidNullableFilter<"RawEvent"> | string | null
    ts?: DateTimeFilter<"RawEvent"> | Date | string
    eventType?: StringFilter<"RawEvent"> | string
    payloadJson?: JsonFilter<"RawEvent">
    payloadHash?: StringFilter<"RawEvent"> | string
    snapshot?: XOR<SnapshotNullableScalarRelationFilter, SnapshotWhereInput> | null
  }, "id">

  export type RawEventOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    snapshotId?: SortOrderInput | SortOrder
    ts?: SortOrder
    eventType?: SortOrder
    payloadJson?: SortOrder
    payloadHash?: SortOrder
    _count?: RawEventCountOrderByAggregateInput
    _max?: RawEventMaxOrderByAggregateInput
    _min?: RawEventMinOrderByAggregateInput
  }

  export type RawEventScalarWhereWithAggregatesInput = {
    AND?: RawEventScalarWhereWithAggregatesInput | RawEventScalarWhereWithAggregatesInput[]
    OR?: RawEventScalarWhereWithAggregatesInput[]
    NOT?: RawEventScalarWhereWithAggregatesInput | RawEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RawEvent"> | string
    provider?: EnumProviderWithAggregatesFilter<"RawEvent"> | $Enums.Provider
    snapshotId?: UuidNullableWithAggregatesFilter<"RawEvent"> | string | null
    ts?: DateTimeWithAggregatesFilter<"RawEvent"> | Date | string
    eventType?: StringWithAggregatesFilter<"RawEvent"> | string
    payloadJson?: JsonWithAggregatesFilter<"RawEvent">
    payloadHash?: StringWithAggregatesFilter<"RawEvent"> | string
  }

  export type PriceDailyWhereInput = {
    AND?: PriceDailyWhereInput | PriceDailyWhereInput[]
    OR?: PriceDailyWhereInput[]
    NOT?: PriceDailyWhereInput | PriceDailyWhereInput[]
    priceDate?: DateTimeFilter<"PriceDaily"> | Date | string
    assetOrSymbol?: StringFilter<"PriceDaily"> | string
    priceUsd?: DecimalFilter<"PriceDaily"> | Decimal | DecimalJsLike | number | string
    source?: StringFilter<"PriceDaily"> | string
  }

  export type PriceDailyOrderByWithRelationInput = {
    priceDate?: SortOrder
    assetOrSymbol?: SortOrder
    priceUsd?: SortOrder
    source?: SortOrder
  }

  export type PriceDailyWhereUniqueInput = Prisma.AtLeast<{
    priceDate_assetOrSymbol?: PriceDailyPriceDateAssetOrSymbolCompoundUniqueInput
    AND?: PriceDailyWhereInput | PriceDailyWhereInput[]
    OR?: PriceDailyWhereInput[]
    NOT?: PriceDailyWhereInput | PriceDailyWhereInput[]
    priceDate?: DateTimeFilter<"PriceDaily"> | Date | string
    assetOrSymbol?: StringFilter<"PriceDaily"> | string
    priceUsd?: DecimalFilter<"PriceDaily"> | Decimal | DecimalJsLike | number | string
    source?: StringFilter<"PriceDaily"> | string
  }, "priceDate_assetOrSymbol">

  export type PriceDailyOrderByWithAggregationInput = {
    priceDate?: SortOrder
    assetOrSymbol?: SortOrder
    priceUsd?: SortOrder
    source?: SortOrder
    _count?: PriceDailyCountOrderByAggregateInput
    _avg?: PriceDailyAvgOrderByAggregateInput
    _max?: PriceDailyMaxOrderByAggregateInput
    _min?: PriceDailyMinOrderByAggregateInput
    _sum?: PriceDailySumOrderByAggregateInput
  }

  export type PriceDailyScalarWhereWithAggregatesInput = {
    AND?: PriceDailyScalarWhereWithAggregatesInput | PriceDailyScalarWhereWithAggregatesInput[]
    OR?: PriceDailyScalarWhereWithAggregatesInput[]
    NOT?: PriceDailyScalarWhereWithAggregatesInput | PriceDailyScalarWhereWithAggregatesInput[]
    priceDate?: DateTimeWithAggregatesFilter<"PriceDaily"> | Date | string
    assetOrSymbol?: StringWithAggregatesFilter<"PriceDaily"> | string
    priceUsd?: DecimalWithAggregatesFilter<"PriceDaily"> | Decimal | DecimalJsLike | number | string
    source?: StringWithAggregatesFilter<"PriceDaily"> | string
  }

  export type AccountCreateInput = {
    id?: string
    provider: $Enums.Provider
    label: string
    baseCurrency?: string
    createdAt?: Date | string
    balances?: AccountBalanceCreateNestedManyWithoutAccountInput
    positions?: PositionCreateNestedManyWithoutAccountInput
    transfersFrom?: TransferCreateNestedManyWithoutFromAccountInput
    transfersTo?: TransferCreateNestedManyWithoutToAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    provider: $Enums.Provider
    label: string
    baseCurrency?: string
    createdAt?: Date | string
    balances?: AccountBalanceUncheckedCreateNestedManyWithoutAccountInput
    positions?: PositionUncheckedCreateNestedManyWithoutAccountInput
    transfersFrom?: TransferUncheckedCreateNestedManyWithoutFromAccountInput
    transfersTo?: TransferUncheckedCreateNestedManyWithoutToAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    label?: StringFieldUpdateOperationsInput | string
    baseCurrency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: AccountBalanceUpdateManyWithoutAccountNestedInput
    positions?: PositionUpdateManyWithoutAccountNestedInput
    transfersFrom?: TransferUpdateManyWithoutFromAccountNestedInput
    transfersTo?: TransferUpdateManyWithoutToAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    label?: StringFieldUpdateOperationsInput | string
    baseCurrency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: AccountBalanceUncheckedUpdateManyWithoutAccountNestedInput
    positions?: PositionUncheckedUpdateManyWithoutAccountNestedInput
    transfersFrom?: TransferUncheckedUpdateManyWithoutFromAccountNestedInput
    transfersTo?: TransferUncheckedUpdateManyWithoutToAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    provider: $Enums.Provider
    label: string
    baseCurrency?: string
    createdAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    label?: StringFieldUpdateOperationsInput | string
    baseCurrency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    label?: StringFieldUpdateOperationsInput | string
    baseCurrency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotCreateInput = {
    id?: string
    snapshotDate: Date | string
    createdAt?: Date | string
    source?: $Enums.SnapshotSource
    status?: $Enums.SnapshotStatus
    notes?: string | null
    providerSyncRuns?: ProviderSyncRunCreateNestedManyWithoutSnapshotInput
    balances?: AccountBalanceCreateNestedManyWithoutSnapshotInput
    positions?: PositionCreateNestedManyWithoutSnapshotInput
    rawEvents?: RawEventCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotUncheckedCreateInput = {
    id?: string
    snapshotDate: Date | string
    createdAt?: Date | string
    source?: $Enums.SnapshotSource
    status?: $Enums.SnapshotStatus
    notes?: string | null
    providerSyncRuns?: ProviderSyncRunUncheckedCreateNestedManyWithoutSnapshotInput
    balances?: AccountBalanceUncheckedCreateNestedManyWithoutSnapshotInput
    positions?: PositionUncheckedCreateNestedManyWithoutSnapshotInput
    rawEvents?: RawEventUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSnapshotSourceFieldUpdateOperationsInput | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    providerSyncRuns?: ProviderSyncRunUpdateManyWithoutSnapshotNestedInput
    balances?: AccountBalanceUpdateManyWithoutSnapshotNestedInput
    positions?: PositionUpdateManyWithoutSnapshotNestedInput
    rawEvents?: RawEventUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSnapshotSourceFieldUpdateOperationsInput | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    providerSyncRuns?: ProviderSyncRunUncheckedUpdateManyWithoutSnapshotNestedInput
    balances?: AccountBalanceUncheckedUpdateManyWithoutSnapshotNestedInput
    positions?: PositionUncheckedUpdateManyWithoutSnapshotNestedInput
    rawEvents?: RawEventUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotCreateManyInput = {
    id?: string
    snapshotDate: Date | string
    createdAt?: Date | string
    source?: $Enums.SnapshotSource
    status?: $Enums.SnapshotStatus
    notes?: string | null
  }

  export type SnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSnapshotSourceFieldUpdateOperationsInput | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSnapshotSourceFieldUpdateOperationsInput | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProviderSyncRunCreateInput = {
    id?: string
    provider: $Enums.Provider
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SyncRunStatus
    errorMessage?: string | null
    snapshot: SnapshotCreateNestedOneWithoutProviderSyncRunsInput
  }

  export type ProviderSyncRunUncheckedCreateInput = {
    id?: string
    snapshotId: string
    provider: $Enums.Provider
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SyncRunStatus
    errorMessage?: string | null
  }

  export type ProviderSyncRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSyncRunStatusFieldUpdateOperationsInput | $Enums.SyncRunStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: SnapshotUpdateOneRequiredWithoutProviderSyncRunsNestedInput
  }

  export type ProviderSyncRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotId?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSyncRunStatusFieldUpdateOperationsInput | $Enums.SyncRunStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProviderSyncRunCreateManyInput = {
    id?: string
    snapshotId: string
    provider: $Enums.Provider
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SyncRunStatus
    errorMessage?: string | null
  }

  export type ProviderSyncRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSyncRunStatusFieldUpdateOperationsInput | $Enums.SyncRunStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProviderSyncRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotId?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSyncRunStatusFieldUpdateOperationsInput | $Enums.SyncRunStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountBalanceCreateInput = {
    asset: string
    free: Decimal | DecimalJsLike | number | string
    locked?: Decimal | DecimalJsLike | number | string
    usdValue?: Decimal | DecimalJsLike | number | string | null
    snapshot: SnapshotCreateNestedOneWithoutBalancesInput
    account: AccountCreateNestedOneWithoutBalancesInput
  }

  export type AccountBalanceUncheckedCreateInput = {
    snapshotId: string
    accountId: string
    asset: string
    free: Decimal | DecimalJsLike | number | string
    locked?: Decimal | DecimalJsLike | number | string
    usdValue?: Decimal | DecimalJsLike | number | string | null
  }

  export type AccountBalanceUpdateInput = {
    asset?: StringFieldUpdateOperationsInput | string
    free?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    snapshot?: SnapshotUpdateOneRequiredWithoutBalancesNestedInput
    account?: AccountUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type AccountBalanceUncheckedUpdateInput = {
    snapshotId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    free?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type AccountBalanceCreateManyInput = {
    snapshotId: string
    accountId: string
    asset: string
    free: Decimal | DecimalJsLike | number | string
    locked?: Decimal | DecimalJsLike | number | string
    usdValue?: Decimal | DecimalJsLike | number | string | null
  }

  export type AccountBalanceUpdateManyMutationInput = {
    asset?: StringFieldUpdateOperationsInput | string
    free?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type AccountBalanceUncheckedUpdateManyInput = {
    snapshotId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    free?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PositionCreateInput = {
    symbol: string
    side: $Enums.PositionSide
    size: Decimal | DecimalJsLike | number | string
    entryPrice?: Decimal | DecimalJsLike | number | string | null
    markPrice?: Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: Decimal | DecimalJsLike | number | string | null
    snapshot: SnapshotCreateNestedOneWithoutPositionsInput
    account: AccountCreateNestedOneWithoutPositionsInput
  }

  export type PositionUncheckedCreateInput = {
    snapshotId: string
    accountId: string
    symbol: string
    side: $Enums.PositionSide
    size: Decimal | DecimalJsLike | number | string
    entryPrice?: Decimal | DecimalJsLike | number | string | null
    markPrice?: Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: Decimal | DecimalJsLike | number | string | null
  }

  export type PositionUpdateInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    side?: EnumPositionSideFieldUpdateOperationsInput | $Enums.PositionSide
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entryPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    snapshot?: SnapshotUpdateOneRequiredWithoutPositionsNestedInput
    account?: AccountUpdateOneRequiredWithoutPositionsNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    snapshotId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    side?: EnumPositionSideFieldUpdateOperationsInput | $Enums.PositionSide
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entryPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PositionCreateManyInput = {
    snapshotId: string
    accountId: string
    symbol: string
    side: $Enums.PositionSide
    size: Decimal | DecimalJsLike | number | string
    entryPrice?: Decimal | DecimalJsLike | number | string | null
    markPrice?: Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: Decimal | DecimalJsLike | number | string | null
  }

  export type PositionUpdateManyMutationInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    side?: EnumPositionSideFieldUpdateOperationsInput | $Enums.PositionSide
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entryPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PositionUncheckedUpdateManyInput = {
    snapshotId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    side?: EnumPositionSideFieldUpdateOperationsInput | $Enums.PositionSide
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entryPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TransferCreateInput = {
    id?: string
    ts: Date | string
    asset: string
    amount: Decimal | DecimalJsLike | number | string
    fee?: Decimal | DecimalJsLike | number | string | null
    txid?: string | null
    note?: string | null
    fromAccount?: AccountCreateNestedOneWithoutTransfersFromInput
    toAccount?: AccountCreateNestedOneWithoutTransfersToInput
  }

  export type TransferUncheckedCreateInput = {
    id?: string
    ts: Date | string
    fromAccountId?: string | null
    toAccountId?: string | null
    asset: string
    amount: Decimal | DecimalJsLike | number | string
    fee?: Decimal | DecimalJsLike | number | string | null
    txid?: string | null
    note?: string | null
  }

  export type TransferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txid?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromAccount?: AccountUpdateOneWithoutTransfersFromNestedInput
    toAccount?: AccountUpdateOneWithoutTransfersToNestedInput
  }

  export type TransferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    fromAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    toAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txid?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransferCreateManyInput = {
    id?: string
    ts: Date | string
    fromAccountId?: string | null
    toAccountId?: string | null
    asset: string
    amount: Decimal | DecimalJsLike | number | string
    fee?: Decimal | DecimalJsLike | number | string | null
    txid?: string | null
    note?: string | null
  }

  export type TransferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txid?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    fromAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    toAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txid?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RawEventCreateInput = {
    id?: string
    provider: $Enums.Provider
    ts?: Date | string
    eventType: string
    payloadJson: JsonNullValueInput | InputJsonValue
    payloadHash: string
    snapshot?: SnapshotCreateNestedOneWithoutRawEventsInput
  }

  export type RawEventUncheckedCreateInput = {
    id?: string
    provider: $Enums.Provider
    snapshotId?: string | null
    ts?: Date | string
    eventType: string
    payloadJson: JsonNullValueInput | InputJsonValue
    payloadHash: string
  }

  export type RawEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    payloadHash?: StringFieldUpdateOperationsInput | string
    snapshot?: SnapshotUpdateOneWithoutRawEventsNestedInput
  }

  export type RawEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    payloadHash?: StringFieldUpdateOperationsInput | string
  }

  export type RawEventCreateManyInput = {
    id?: string
    provider: $Enums.Provider
    snapshotId?: string | null
    ts?: Date | string
    eventType: string
    payloadJson: JsonNullValueInput | InputJsonValue
    payloadHash: string
  }

  export type RawEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    payloadHash?: StringFieldUpdateOperationsInput | string
  }

  export type RawEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    payloadHash?: StringFieldUpdateOperationsInput | string
  }

  export type PriceDailyCreateInput = {
    priceDate: Date | string
    assetOrSymbol: string
    priceUsd: Decimal | DecimalJsLike | number | string
    source: string
  }

  export type PriceDailyUncheckedCreateInput = {
    priceDate: Date | string
    assetOrSymbol: string
    priceUsd: Decimal | DecimalJsLike | number | string
    source: string
  }

  export type PriceDailyUpdateInput = {
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assetOrSymbol?: StringFieldUpdateOperationsInput | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: StringFieldUpdateOperationsInput | string
  }

  export type PriceDailyUncheckedUpdateInput = {
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assetOrSymbol?: StringFieldUpdateOperationsInput | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: StringFieldUpdateOperationsInput | string
  }

  export type PriceDailyCreateManyInput = {
    priceDate: Date | string
    assetOrSymbol: string
    priceUsd: Decimal | DecimalJsLike | number | string
    source: string
  }

  export type PriceDailyUpdateManyMutationInput = {
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assetOrSymbol?: StringFieldUpdateOperationsInput | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: StringFieldUpdateOperationsInput | string
  }

  export type PriceDailyUncheckedUpdateManyInput = {
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assetOrSymbol?: StringFieldUpdateOperationsInput | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
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

  export type AccountBalanceListRelationFilter = {
    every?: AccountBalanceWhereInput
    some?: AccountBalanceWhereInput
    none?: AccountBalanceWhereInput
  }

  export type PositionListRelationFilter = {
    every?: PositionWhereInput
    some?: PositionWhereInput
    none?: PositionWhereInput
  }

  export type TransferListRelationFilter = {
    every?: TransferWhereInput
    some?: TransferWhereInput
    none?: TransferWhereInput
  }

  export type AccountBalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PositionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    label?: SortOrder
    baseCurrency?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    label?: SortOrder
    baseCurrency?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    label?: SortOrder
    baseCurrency?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
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

  export type EnumSnapshotSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.SnapshotSource | EnumSnapshotSourceFieldRefInput<$PrismaModel>
    in?: $Enums.SnapshotSource[] | ListEnumSnapshotSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SnapshotSource[] | ListEnumSnapshotSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumSnapshotSourceFilter<$PrismaModel> | $Enums.SnapshotSource
  }

  export type EnumSnapshotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SnapshotStatus | EnumSnapshotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSnapshotStatusFilter<$PrismaModel> | $Enums.SnapshotStatus
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

  export type ProviderSyncRunListRelationFilter = {
    every?: ProviderSyncRunWhereInput
    some?: ProviderSyncRunWhereInput
    none?: ProviderSyncRunWhereInput
  }

  export type RawEventListRelationFilter = {
    every?: RawEventWhereInput
    some?: RawEventWhereInput
    none?: RawEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProviderSyncRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RawEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    snapshotDate?: SortOrder
    createdAt?: SortOrder
    source?: SortOrder
    status?: SortOrder
    notes?: SortOrder
  }

  export type SnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    snapshotDate?: SortOrder
    createdAt?: SortOrder
    source?: SortOrder
    status?: SortOrder
    notes?: SortOrder
  }

  export type SnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    snapshotDate?: SortOrder
    createdAt?: SortOrder
    source?: SortOrder
    status?: SortOrder
    notes?: SortOrder
  }

  export type EnumSnapshotSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SnapshotSource | EnumSnapshotSourceFieldRefInput<$PrismaModel>
    in?: $Enums.SnapshotSource[] | ListEnumSnapshotSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SnapshotSource[] | ListEnumSnapshotSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumSnapshotSourceWithAggregatesFilter<$PrismaModel> | $Enums.SnapshotSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSnapshotSourceFilter<$PrismaModel>
    _max?: NestedEnumSnapshotSourceFilter<$PrismaModel>
  }

  export type EnumSnapshotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SnapshotStatus | EnumSnapshotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSnapshotStatusWithAggregatesFilter<$PrismaModel> | $Enums.SnapshotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSnapshotStatusFilter<$PrismaModel>
    _max?: NestedEnumSnapshotStatusFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumSyncRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SyncRunStatus | EnumSyncRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SyncRunStatus[] | ListEnumSyncRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SyncRunStatus[] | ListEnumSyncRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSyncRunStatusFilter<$PrismaModel> | $Enums.SyncRunStatus
  }

  export type SnapshotScalarRelationFilter = {
    is?: SnapshotWhereInput
    isNot?: SnapshotWhereInput
  }

  export type ProviderSyncRunSnapshotIdProviderCompoundUniqueInput = {
    snapshotId: string
    provider: $Enums.Provider
  }

  export type ProviderSyncRunCountOrderByAggregateInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    provider?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProviderSyncRunMaxOrderByAggregateInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    provider?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProviderSyncRunMinOrderByAggregateInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    provider?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSyncRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SyncRunStatus | EnumSyncRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SyncRunStatus[] | ListEnumSyncRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SyncRunStatus[] | ListEnumSyncRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSyncRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.SyncRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSyncRunStatusFilter<$PrismaModel>
    _max?: NestedEnumSyncRunStatusFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type AccountBalanceSnapshotIdAccountIdAssetCompoundUniqueInput = {
    snapshotId: string
    accountId: string
    asset: string
  }

  export type AccountBalanceCountOrderByAggregateInput = {
    snapshotId?: SortOrder
    accountId?: SortOrder
    asset?: SortOrder
    free?: SortOrder
    locked?: SortOrder
    usdValue?: SortOrder
  }

  export type AccountBalanceAvgOrderByAggregateInput = {
    free?: SortOrder
    locked?: SortOrder
    usdValue?: SortOrder
  }

  export type AccountBalanceMaxOrderByAggregateInput = {
    snapshotId?: SortOrder
    accountId?: SortOrder
    asset?: SortOrder
    free?: SortOrder
    locked?: SortOrder
    usdValue?: SortOrder
  }

  export type AccountBalanceMinOrderByAggregateInput = {
    snapshotId?: SortOrder
    accountId?: SortOrder
    asset?: SortOrder
    free?: SortOrder
    locked?: SortOrder
    usdValue?: SortOrder
  }

  export type AccountBalanceSumOrderByAggregateInput = {
    free?: SortOrder
    locked?: SortOrder
    usdValue?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumPositionSideFilter<$PrismaModel = never> = {
    equals?: $Enums.PositionSide | EnumPositionSideFieldRefInput<$PrismaModel>
    in?: $Enums.PositionSide[] | ListEnumPositionSideFieldRefInput<$PrismaModel>
    notIn?: $Enums.PositionSide[] | ListEnumPositionSideFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionSideFilter<$PrismaModel> | $Enums.PositionSide
  }

  export type PositionSnapshotIdAccountIdSymbolSideCompoundUniqueInput = {
    snapshotId: string
    accountId: string
    symbol: string
    side: $Enums.PositionSide
  }

  export type PositionCountOrderByAggregateInput = {
    snapshotId?: SortOrder
    accountId?: SortOrder
    symbol?: SortOrder
    side?: SortOrder
    size?: SortOrder
    entryPrice?: SortOrder
    markPrice?: SortOrder
    pnlUnrealizedUsd?: SortOrder
  }

  export type PositionAvgOrderByAggregateInput = {
    size?: SortOrder
    entryPrice?: SortOrder
    markPrice?: SortOrder
    pnlUnrealizedUsd?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    snapshotId?: SortOrder
    accountId?: SortOrder
    symbol?: SortOrder
    side?: SortOrder
    size?: SortOrder
    entryPrice?: SortOrder
    markPrice?: SortOrder
    pnlUnrealizedUsd?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    snapshotId?: SortOrder
    accountId?: SortOrder
    symbol?: SortOrder
    side?: SortOrder
    size?: SortOrder
    entryPrice?: SortOrder
    markPrice?: SortOrder
    pnlUnrealizedUsd?: SortOrder
  }

  export type PositionSumOrderByAggregateInput = {
    size?: SortOrder
    entryPrice?: SortOrder
    markPrice?: SortOrder
    pnlUnrealizedUsd?: SortOrder
  }

  export type EnumPositionSideWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PositionSide | EnumPositionSideFieldRefInput<$PrismaModel>
    in?: $Enums.PositionSide[] | ListEnumPositionSideFieldRefInput<$PrismaModel>
    notIn?: $Enums.PositionSide[] | ListEnumPositionSideFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionSideWithAggregatesFilter<$PrismaModel> | $Enums.PositionSide
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPositionSideFilter<$PrismaModel>
    _max?: NestedEnumPositionSideFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type TransferCountOrderByAggregateInput = {
    id?: SortOrder
    ts?: SortOrder
    fromAccountId?: SortOrder
    toAccountId?: SortOrder
    asset?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    txid?: SortOrder
    note?: SortOrder
  }

  export type TransferAvgOrderByAggregateInput = {
    amount?: SortOrder
    fee?: SortOrder
  }

  export type TransferMaxOrderByAggregateInput = {
    id?: SortOrder
    ts?: SortOrder
    fromAccountId?: SortOrder
    toAccountId?: SortOrder
    asset?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    txid?: SortOrder
    note?: SortOrder
  }

  export type TransferMinOrderByAggregateInput = {
    id?: SortOrder
    ts?: SortOrder
    fromAccountId?: SortOrder
    toAccountId?: SortOrder
    asset?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    txid?: SortOrder
    note?: SortOrder
  }

  export type TransferSumOrderByAggregateInput = {
    amount?: SortOrder
    fee?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SnapshotNullableScalarRelationFilter = {
    is?: SnapshotWhereInput | null
    isNot?: SnapshotWhereInput | null
  }

  export type RawEventCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    snapshotId?: SortOrder
    ts?: SortOrder
    eventType?: SortOrder
    payloadJson?: SortOrder
    payloadHash?: SortOrder
  }

  export type RawEventMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    snapshotId?: SortOrder
    ts?: SortOrder
    eventType?: SortOrder
    payloadHash?: SortOrder
  }

  export type RawEventMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    snapshotId?: SortOrder
    ts?: SortOrder
    eventType?: SortOrder
    payloadHash?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PriceDailyPriceDateAssetOrSymbolCompoundUniqueInput = {
    priceDate: Date | string
    assetOrSymbol: string
  }

  export type PriceDailyCountOrderByAggregateInput = {
    priceDate?: SortOrder
    assetOrSymbol?: SortOrder
    priceUsd?: SortOrder
    source?: SortOrder
  }

  export type PriceDailyAvgOrderByAggregateInput = {
    priceUsd?: SortOrder
  }

  export type PriceDailyMaxOrderByAggregateInput = {
    priceDate?: SortOrder
    assetOrSymbol?: SortOrder
    priceUsd?: SortOrder
    source?: SortOrder
  }

  export type PriceDailyMinOrderByAggregateInput = {
    priceDate?: SortOrder
    assetOrSymbol?: SortOrder
    priceUsd?: SortOrder
    source?: SortOrder
  }

  export type PriceDailySumOrderByAggregateInput = {
    priceUsd?: SortOrder
  }

  export type AccountBalanceCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountBalanceCreateWithoutAccountInput, AccountBalanceUncheckedCreateWithoutAccountInput> | AccountBalanceCreateWithoutAccountInput[] | AccountBalanceUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountBalanceCreateOrConnectWithoutAccountInput | AccountBalanceCreateOrConnectWithoutAccountInput[]
    createMany?: AccountBalanceCreateManyAccountInputEnvelope
    connect?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
  }

  export type PositionCreateNestedManyWithoutAccountInput = {
    create?: XOR<PositionCreateWithoutAccountInput, PositionUncheckedCreateWithoutAccountInput> | PositionCreateWithoutAccountInput[] | PositionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutAccountInput | PositionCreateOrConnectWithoutAccountInput[]
    createMany?: PositionCreateManyAccountInputEnvelope
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type TransferCreateNestedManyWithoutFromAccountInput = {
    create?: XOR<TransferCreateWithoutFromAccountInput, TransferUncheckedCreateWithoutFromAccountInput> | TransferCreateWithoutFromAccountInput[] | TransferUncheckedCreateWithoutFromAccountInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutFromAccountInput | TransferCreateOrConnectWithoutFromAccountInput[]
    createMany?: TransferCreateManyFromAccountInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type TransferCreateNestedManyWithoutToAccountInput = {
    create?: XOR<TransferCreateWithoutToAccountInput, TransferUncheckedCreateWithoutToAccountInput> | TransferCreateWithoutToAccountInput[] | TransferUncheckedCreateWithoutToAccountInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutToAccountInput | TransferCreateOrConnectWithoutToAccountInput[]
    createMany?: TransferCreateManyToAccountInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type AccountBalanceUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountBalanceCreateWithoutAccountInput, AccountBalanceUncheckedCreateWithoutAccountInput> | AccountBalanceCreateWithoutAccountInput[] | AccountBalanceUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountBalanceCreateOrConnectWithoutAccountInput | AccountBalanceCreateOrConnectWithoutAccountInput[]
    createMany?: AccountBalanceCreateManyAccountInputEnvelope
    connect?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
  }

  export type PositionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<PositionCreateWithoutAccountInput, PositionUncheckedCreateWithoutAccountInput> | PositionCreateWithoutAccountInput[] | PositionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutAccountInput | PositionCreateOrConnectWithoutAccountInput[]
    createMany?: PositionCreateManyAccountInputEnvelope
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type TransferUncheckedCreateNestedManyWithoutFromAccountInput = {
    create?: XOR<TransferCreateWithoutFromAccountInput, TransferUncheckedCreateWithoutFromAccountInput> | TransferCreateWithoutFromAccountInput[] | TransferUncheckedCreateWithoutFromAccountInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutFromAccountInput | TransferCreateOrConnectWithoutFromAccountInput[]
    createMany?: TransferCreateManyFromAccountInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type TransferUncheckedCreateNestedManyWithoutToAccountInput = {
    create?: XOR<TransferCreateWithoutToAccountInput, TransferUncheckedCreateWithoutToAccountInput> | TransferCreateWithoutToAccountInput[] | TransferUncheckedCreateWithoutToAccountInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutToAccountInput | TransferCreateOrConnectWithoutToAccountInput[]
    createMany?: TransferCreateManyToAccountInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountBalanceUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountBalanceCreateWithoutAccountInput, AccountBalanceUncheckedCreateWithoutAccountInput> | AccountBalanceCreateWithoutAccountInput[] | AccountBalanceUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountBalanceCreateOrConnectWithoutAccountInput | AccountBalanceCreateOrConnectWithoutAccountInput[]
    upsert?: AccountBalanceUpsertWithWhereUniqueWithoutAccountInput | AccountBalanceUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountBalanceCreateManyAccountInputEnvelope
    set?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    disconnect?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    delete?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    connect?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    update?: AccountBalanceUpdateWithWhereUniqueWithoutAccountInput | AccountBalanceUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountBalanceUpdateManyWithWhereWithoutAccountInput | AccountBalanceUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountBalanceScalarWhereInput | AccountBalanceScalarWhereInput[]
  }

  export type PositionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PositionCreateWithoutAccountInput, PositionUncheckedCreateWithoutAccountInput> | PositionCreateWithoutAccountInput[] | PositionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutAccountInput | PositionCreateOrConnectWithoutAccountInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutAccountInput | PositionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PositionCreateManyAccountInputEnvelope
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutAccountInput | PositionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutAccountInput | PositionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type TransferUpdateManyWithoutFromAccountNestedInput = {
    create?: XOR<TransferCreateWithoutFromAccountInput, TransferUncheckedCreateWithoutFromAccountInput> | TransferCreateWithoutFromAccountInput[] | TransferUncheckedCreateWithoutFromAccountInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutFromAccountInput | TransferCreateOrConnectWithoutFromAccountInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutFromAccountInput | TransferUpsertWithWhereUniqueWithoutFromAccountInput[]
    createMany?: TransferCreateManyFromAccountInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutFromAccountInput | TransferUpdateWithWhereUniqueWithoutFromAccountInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutFromAccountInput | TransferUpdateManyWithWhereWithoutFromAccountInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type TransferUpdateManyWithoutToAccountNestedInput = {
    create?: XOR<TransferCreateWithoutToAccountInput, TransferUncheckedCreateWithoutToAccountInput> | TransferCreateWithoutToAccountInput[] | TransferUncheckedCreateWithoutToAccountInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutToAccountInput | TransferCreateOrConnectWithoutToAccountInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutToAccountInput | TransferUpsertWithWhereUniqueWithoutToAccountInput[]
    createMany?: TransferCreateManyToAccountInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutToAccountInput | TransferUpdateWithWhereUniqueWithoutToAccountInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutToAccountInput | TransferUpdateManyWithWhereWithoutToAccountInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type AccountBalanceUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountBalanceCreateWithoutAccountInput, AccountBalanceUncheckedCreateWithoutAccountInput> | AccountBalanceCreateWithoutAccountInput[] | AccountBalanceUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountBalanceCreateOrConnectWithoutAccountInput | AccountBalanceCreateOrConnectWithoutAccountInput[]
    upsert?: AccountBalanceUpsertWithWhereUniqueWithoutAccountInput | AccountBalanceUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountBalanceCreateManyAccountInputEnvelope
    set?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    disconnect?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    delete?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    connect?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    update?: AccountBalanceUpdateWithWhereUniqueWithoutAccountInput | AccountBalanceUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountBalanceUpdateManyWithWhereWithoutAccountInput | AccountBalanceUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountBalanceScalarWhereInput | AccountBalanceScalarWhereInput[]
  }

  export type PositionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PositionCreateWithoutAccountInput, PositionUncheckedCreateWithoutAccountInput> | PositionCreateWithoutAccountInput[] | PositionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutAccountInput | PositionCreateOrConnectWithoutAccountInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutAccountInput | PositionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PositionCreateManyAccountInputEnvelope
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutAccountInput | PositionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutAccountInput | PositionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type TransferUncheckedUpdateManyWithoutFromAccountNestedInput = {
    create?: XOR<TransferCreateWithoutFromAccountInput, TransferUncheckedCreateWithoutFromAccountInput> | TransferCreateWithoutFromAccountInput[] | TransferUncheckedCreateWithoutFromAccountInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutFromAccountInput | TransferCreateOrConnectWithoutFromAccountInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutFromAccountInput | TransferUpsertWithWhereUniqueWithoutFromAccountInput[]
    createMany?: TransferCreateManyFromAccountInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutFromAccountInput | TransferUpdateWithWhereUniqueWithoutFromAccountInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutFromAccountInput | TransferUpdateManyWithWhereWithoutFromAccountInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type TransferUncheckedUpdateManyWithoutToAccountNestedInput = {
    create?: XOR<TransferCreateWithoutToAccountInput, TransferUncheckedCreateWithoutToAccountInput> | TransferCreateWithoutToAccountInput[] | TransferUncheckedCreateWithoutToAccountInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutToAccountInput | TransferCreateOrConnectWithoutToAccountInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutToAccountInput | TransferUpsertWithWhereUniqueWithoutToAccountInput[]
    createMany?: TransferCreateManyToAccountInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutToAccountInput | TransferUpdateWithWhereUniqueWithoutToAccountInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutToAccountInput | TransferUpdateManyWithWhereWithoutToAccountInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type ProviderSyncRunCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<ProviderSyncRunCreateWithoutSnapshotInput, ProviderSyncRunUncheckedCreateWithoutSnapshotInput> | ProviderSyncRunCreateWithoutSnapshotInput[] | ProviderSyncRunUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: ProviderSyncRunCreateOrConnectWithoutSnapshotInput | ProviderSyncRunCreateOrConnectWithoutSnapshotInput[]
    createMany?: ProviderSyncRunCreateManySnapshotInputEnvelope
    connect?: ProviderSyncRunWhereUniqueInput | ProviderSyncRunWhereUniqueInput[]
  }

  export type AccountBalanceCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<AccountBalanceCreateWithoutSnapshotInput, AccountBalanceUncheckedCreateWithoutSnapshotInput> | AccountBalanceCreateWithoutSnapshotInput[] | AccountBalanceUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AccountBalanceCreateOrConnectWithoutSnapshotInput | AccountBalanceCreateOrConnectWithoutSnapshotInput[]
    createMany?: AccountBalanceCreateManySnapshotInputEnvelope
    connect?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
  }

  export type PositionCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<PositionCreateWithoutSnapshotInput, PositionUncheckedCreateWithoutSnapshotInput> | PositionCreateWithoutSnapshotInput[] | PositionUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutSnapshotInput | PositionCreateOrConnectWithoutSnapshotInput[]
    createMany?: PositionCreateManySnapshotInputEnvelope
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type RawEventCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<RawEventCreateWithoutSnapshotInput, RawEventUncheckedCreateWithoutSnapshotInput> | RawEventCreateWithoutSnapshotInput[] | RawEventUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: RawEventCreateOrConnectWithoutSnapshotInput | RawEventCreateOrConnectWithoutSnapshotInput[]
    createMany?: RawEventCreateManySnapshotInputEnvelope
    connect?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
  }

  export type ProviderSyncRunUncheckedCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<ProviderSyncRunCreateWithoutSnapshotInput, ProviderSyncRunUncheckedCreateWithoutSnapshotInput> | ProviderSyncRunCreateWithoutSnapshotInput[] | ProviderSyncRunUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: ProviderSyncRunCreateOrConnectWithoutSnapshotInput | ProviderSyncRunCreateOrConnectWithoutSnapshotInput[]
    createMany?: ProviderSyncRunCreateManySnapshotInputEnvelope
    connect?: ProviderSyncRunWhereUniqueInput | ProviderSyncRunWhereUniqueInput[]
  }

  export type AccountBalanceUncheckedCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<AccountBalanceCreateWithoutSnapshotInput, AccountBalanceUncheckedCreateWithoutSnapshotInput> | AccountBalanceCreateWithoutSnapshotInput[] | AccountBalanceUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AccountBalanceCreateOrConnectWithoutSnapshotInput | AccountBalanceCreateOrConnectWithoutSnapshotInput[]
    createMany?: AccountBalanceCreateManySnapshotInputEnvelope
    connect?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
  }

  export type PositionUncheckedCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<PositionCreateWithoutSnapshotInput, PositionUncheckedCreateWithoutSnapshotInput> | PositionCreateWithoutSnapshotInput[] | PositionUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutSnapshotInput | PositionCreateOrConnectWithoutSnapshotInput[]
    createMany?: PositionCreateManySnapshotInputEnvelope
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type RawEventUncheckedCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<RawEventCreateWithoutSnapshotInput, RawEventUncheckedCreateWithoutSnapshotInput> | RawEventCreateWithoutSnapshotInput[] | RawEventUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: RawEventCreateOrConnectWithoutSnapshotInput | RawEventCreateOrConnectWithoutSnapshotInput[]
    createMany?: RawEventCreateManySnapshotInputEnvelope
    connect?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
  }

  export type EnumSnapshotSourceFieldUpdateOperationsInput = {
    set?: $Enums.SnapshotSource
  }

  export type EnumSnapshotStatusFieldUpdateOperationsInput = {
    set?: $Enums.SnapshotStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProviderSyncRunUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<ProviderSyncRunCreateWithoutSnapshotInput, ProviderSyncRunUncheckedCreateWithoutSnapshotInput> | ProviderSyncRunCreateWithoutSnapshotInput[] | ProviderSyncRunUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: ProviderSyncRunCreateOrConnectWithoutSnapshotInput | ProviderSyncRunCreateOrConnectWithoutSnapshotInput[]
    upsert?: ProviderSyncRunUpsertWithWhereUniqueWithoutSnapshotInput | ProviderSyncRunUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: ProviderSyncRunCreateManySnapshotInputEnvelope
    set?: ProviderSyncRunWhereUniqueInput | ProviderSyncRunWhereUniqueInput[]
    disconnect?: ProviderSyncRunWhereUniqueInput | ProviderSyncRunWhereUniqueInput[]
    delete?: ProviderSyncRunWhereUniqueInput | ProviderSyncRunWhereUniqueInput[]
    connect?: ProviderSyncRunWhereUniqueInput | ProviderSyncRunWhereUniqueInput[]
    update?: ProviderSyncRunUpdateWithWhereUniqueWithoutSnapshotInput | ProviderSyncRunUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: ProviderSyncRunUpdateManyWithWhereWithoutSnapshotInput | ProviderSyncRunUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: ProviderSyncRunScalarWhereInput | ProviderSyncRunScalarWhereInput[]
  }

  export type AccountBalanceUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<AccountBalanceCreateWithoutSnapshotInput, AccountBalanceUncheckedCreateWithoutSnapshotInput> | AccountBalanceCreateWithoutSnapshotInput[] | AccountBalanceUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AccountBalanceCreateOrConnectWithoutSnapshotInput | AccountBalanceCreateOrConnectWithoutSnapshotInput[]
    upsert?: AccountBalanceUpsertWithWhereUniqueWithoutSnapshotInput | AccountBalanceUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: AccountBalanceCreateManySnapshotInputEnvelope
    set?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    disconnect?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    delete?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    connect?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    update?: AccountBalanceUpdateWithWhereUniqueWithoutSnapshotInput | AccountBalanceUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: AccountBalanceUpdateManyWithWhereWithoutSnapshotInput | AccountBalanceUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: AccountBalanceScalarWhereInput | AccountBalanceScalarWhereInput[]
  }

  export type PositionUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<PositionCreateWithoutSnapshotInput, PositionUncheckedCreateWithoutSnapshotInput> | PositionCreateWithoutSnapshotInput[] | PositionUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutSnapshotInput | PositionCreateOrConnectWithoutSnapshotInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutSnapshotInput | PositionUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: PositionCreateManySnapshotInputEnvelope
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutSnapshotInput | PositionUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutSnapshotInput | PositionUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type RawEventUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<RawEventCreateWithoutSnapshotInput, RawEventUncheckedCreateWithoutSnapshotInput> | RawEventCreateWithoutSnapshotInput[] | RawEventUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: RawEventCreateOrConnectWithoutSnapshotInput | RawEventCreateOrConnectWithoutSnapshotInput[]
    upsert?: RawEventUpsertWithWhereUniqueWithoutSnapshotInput | RawEventUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: RawEventCreateManySnapshotInputEnvelope
    set?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    disconnect?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    delete?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    connect?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    update?: RawEventUpdateWithWhereUniqueWithoutSnapshotInput | RawEventUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: RawEventUpdateManyWithWhereWithoutSnapshotInput | RawEventUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: RawEventScalarWhereInput | RawEventScalarWhereInput[]
  }

  export type ProviderSyncRunUncheckedUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<ProviderSyncRunCreateWithoutSnapshotInput, ProviderSyncRunUncheckedCreateWithoutSnapshotInput> | ProviderSyncRunCreateWithoutSnapshotInput[] | ProviderSyncRunUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: ProviderSyncRunCreateOrConnectWithoutSnapshotInput | ProviderSyncRunCreateOrConnectWithoutSnapshotInput[]
    upsert?: ProviderSyncRunUpsertWithWhereUniqueWithoutSnapshotInput | ProviderSyncRunUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: ProviderSyncRunCreateManySnapshotInputEnvelope
    set?: ProviderSyncRunWhereUniqueInput | ProviderSyncRunWhereUniqueInput[]
    disconnect?: ProviderSyncRunWhereUniqueInput | ProviderSyncRunWhereUniqueInput[]
    delete?: ProviderSyncRunWhereUniqueInput | ProviderSyncRunWhereUniqueInput[]
    connect?: ProviderSyncRunWhereUniqueInput | ProviderSyncRunWhereUniqueInput[]
    update?: ProviderSyncRunUpdateWithWhereUniqueWithoutSnapshotInput | ProviderSyncRunUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: ProviderSyncRunUpdateManyWithWhereWithoutSnapshotInput | ProviderSyncRunUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: ProviderSyncRunScalarWhereInput | ProviderSyncRunScalarWhereInput[]
  }

  export type AccountBalanceUncheckedUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<AccountBalanceCreateWithoutSnapshotInput, AccountBalanceUncheckedCreateWithoutSnapshotInput> | AccountBalanceCreateWithoutSnapshotInput[] | AccountBalanceUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AccountBalanceCreateOrConnectWithoutSnapshotInput | AccountBalanceCreateOrConnectWithoutSnapshotInput[]
    upsert?: AccountBalanceUpsertWithWhereUniqueWithoutSnapshotInput | AccountBalanceUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: AccountBalanceCreateManySnapshotInputEnvelope
    set?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    disconnect?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    delete?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    connect?: AccountBalanceWhereUniqueInput | AccountBalanceWhereUniqueInput[]
    update?: AccountBalanceUpdateWithWhereUniqueWithoutSnapshotInput | AccountBalanceUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: AccountBalanceUpdateManyWithWhereWithoutSnapshotInput | AccountBalanceUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: AccountBalanceScalarWhereInput | AccountBalanceScalarWhereInput[]
  }

  export type PositionUncheckedUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<PositionCreateWithoutSnapshotInput, PositionUncheckedCreateWithoutSnapshotInput> | PositionCreateWithoutSnapshotInput[] | PositionUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutSnapshotInput | PositionCreateOrConnectWithoutSnapshotInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutSnapshotInput | PositionUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: PositionCreateManySnapshotInputEnvelope
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutSnapshotInput | PositionUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutSnapshotInput | PositionUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type RawEventUncheckedUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<RawEventCreateWithoutSnapshotInput, RawEventUncheckedCreateWithoutSnapshotInput> | RawEventCreateWithoutSnapshotInput[] | RawEventUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: RawEventCreateOrConnectWithoutSnapshotInput | RawEventCreateOrConnectWithoutSnapshotInput[]
    upsert?: RawEventUpsertWithWhereUniqueWithoutSnapshotInput | RawEventUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: RawEventCreateManySnapshotInputEnvelope
    set?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    disconnect?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    delete?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    connect?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    update?: RawEventUpdateWithWhereUniqueWithoutSnapshotInput | RawEventUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: RawEventUpdateManyWithWhereWithoutSnapshotInput | RawEventUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: RawEventScalarWhereInput | RawEventScalarWhereInput[]
  }

  export type SnapshotCreateNestedOneWithoutProviderSyncRunsInput = {
    create?: XOR<SnapshotCreateWithoutProviderSyncRunsInput, SnapshotUncheckedCreateWithoutProviderSyncRunsInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutProviderSyncRunsInput
    connect?: SnapshotWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumSyncRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.SyncRunStatus
  }

  export type SnapshotUpdateOneRequiredWithoutProviderSyncRunsNestedInput = {
    create?: XOR<SnapshotCreateWithoutProviderSyncRunsInput, SnapshotUncheckedCreateWithoutProviderSyncRunsInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutProviderSyncRunsInput
    upsert?: SnapshotUpsertWithoutProviderSyncRunsInput
    connect?: SnapshotWhereUniqueInput
    update?: XOR<XOR<SnapshotUpdateToOneWithWhereWithoutProviderSyncRunsInput, SnapshotUpdateWithoutProviderSyncRunsInput>, SnapshotUncheckedUpdateWithoutProviderSyncRunsInput>
  }

  export type SnapshotCreateNestedOneWithoutBalancesInput = {
    create?: XOR<SnapshotCreateWithoutBalancesInput, SnapshotUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutBalancesInput
    connect?: SnapshotWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutBalancesInput = {
    create?: XOR<AccountCreateWithoutBalancesInput, AccountUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutBalancesInput
    connect?: AccountWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SnapshotUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: XOR<SnapshotCreateWithoutBalancesInput, SnapshotUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutBalancesInput
    upsert?: SnapshotUpsertWithoutBalancesInput
    connect?: SnapshotWhereUniqueInput
    update?: XOR<XOR<SnapshotUpdateToOneWithWhereWithoutBalancesInput, SnapshotUpdateWithoutBalancesInput>, SnapshotUncheckedUpdateWithoutBalancesInput>
  }

  export type AccountUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: XOR<AccountCreateWithoutBalancesInput, AccountUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutBalancesInput
    upsert?: AccountUpsertWithoutBalancesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutBalancesInput, AccountUpdateWithoutBalancesInput>, AccountUncheckedUpdateWithoutBalancesInput>
  }

  export type SnapshotCreateNestedOneWithoutPositionsInput = {
    create?: XOR<SnapshotCreateWithoutPositionsInput, SnapshotUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutPositionsInput
    connect?: SnapshotWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutPositionsInput = {
    create?: XOR<AccountCreateWithoutPositionsInput, AccountUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPositionsInput
    connect?: AccountWhereUniqueInput
  }

  export type EnumPositionSideFieldUpdateOperationsInput = {
    set?: $Enums.PositionSide
  }

  export type SnapshotUpdateOneRequiredWithoutPositionsNestedInput = {
    create?: XOR<SnapshotCreateWithoutPositionsInput, SnapshotUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutPositionsInput
    upsert?: SnapshotUpsertWithoutPositionsInput
    connect?: SnapshotWhereUniqueInput
    update?: XOR<XOR<SnapshotUpdateToOneWithWhereWithoutPositionsInput, SnapshotUpdateWithoutPositionsInput>, SnapshotUncheckedUpdateWithoutPositionsInput>
  }

  export type AccountUpdateOneRequiredWithoutPositionsNestedInput = {
    create?: XOR<AccountCreateWithoutPositionsInput, AccountUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPositionsInput
    upsert?: AccountUpsertWithoutPositionsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutPositionsInput, AccountUpdateWithoutPositionsInput>, AccountUncheckedUpdateWithoutPositionsInput>
  }

  export type AccountCreateNestedOneWithoutTransfersFromInput = {
    create?: XOR<AccountCreateWithoutTransfersFromInput, AccountUncheckedCreateWithoutTransfersFromInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransfersFromInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutTransfersToInput = {
    create?: XOR<AccountCreateWithoutTransfersToInput, AccountUncheckedCreateWithoutTransfersToInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransfersToInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUpdateOneWithoutTransfersFromNestedInput = {
    create?: XOR<AccountCreateWithoutTransfersFromInput, AccountUncheckedCreateWithoutTransfersFromInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransfersFromInput
    upsert?: AccountUpsertWithoutTransfersFromInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTransfersFromInput, AccountUpdateWithoutTransfersFromInput>, AccountUncheckedUpdateWithoutTransfersFromInput>
  }

  export type AccountUpdateOneWithoutTransfersToNestedInput = {
    create?: XOR<AccountCreateWithoutTransfersToInput, AccountUncheckedCreateWithoutTransfersToInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransfersToInput
    upsert?: AccountUpsertWithoutTransfersToInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTransfersToInput, AccountUpdateWithoutTransfersToInput>, AccountUncheckedUpdateWithoutTransfersToInput>
  }

  export type SnapshotCreateNestedOneWithoutRawEventsInput = {
    create?: XOR<SnapshotCreateWithoutRawEventsInput, SnapshotUncheckedCreateWithoutRawEventsInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutRawEventsInput
    connect?: SnapshotWhereUniqueInput
  }

  export type SnapshotUpdateOneWithoutRawEventsNestedInput = {
    create?: XOR<SnapshotCreateWithoutRawEventsInput, SnapshotUncheckedCreateWithoutRawEventsInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutRawEventsInput
    upsert?: SnapshotUpsertWithoutRawEventsInput
    disconnect?: SnapshotWhereInput | boolean
    delete?: SnapshotWhereInput | boolean
    connect?: SnapshotWhereUniqueInput
    update?: XOR<XOR<SnapshotUpdateToOneWithWhereWithoutRawEventsInput, SnapshotUpdateWithoutRawEventsInput>, SnapshotUncheckedUpdateWithoutRawEventsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
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

  export type NestedEnumSnapshotSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.SnapshotSource | EnumSnapshotSourceFieldRefInput<$PrismaModel>
    in?: $Enums.SnapshotSource[] | ListEnumSnapshotSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SnapshotSource[] | ListEnumSnapshotSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumSnapshotSourceFilter<$PrismaModel> | $Enums.SnapshotSource
  }

  export type NestedEnumSnapshotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SnapshotStatus | EnumSnapshotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSnapshotStatusFilter<$PrismaModel> | $Enums.SnapshotStatus
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

  export type NestedEnumSnapshotSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SnapshotSource | EnumSnapshotSourceFieldRefInput<$PrismaModel>
    in?: $Enums.SnapshotSource[] | ListEnumSnapshotSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SnapshotSource[] | ListEnumSnapshotSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumSnapshotSourceWithAggregatesFilter<$PrismaModel> | $Enums.SnapshotSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSnapshotSourceFilter<$PrismaModel>
    _max?: NestedEnumSnapshotSourceFilter<$PrismaModel>
  }

  export type NestedEnumSnapshotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SnapshotStatus | EnumSnapshotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSnapshotStatusWithAggregatesFilter<$PrismaModel> | $Enums.SnapshotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSnapshotStatusFilter<$PrismaModel>
    _max?: NestedEnumSnapshotStatusFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSyncRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SyncRunStatus | EnumSyncRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SyncRunStatus[] | ListEnumSyncRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SyncRunStatus[] | ListEnumSyncRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSyncRunStatusFilter<$PrismaModel> | $Enums.SyncRunStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSyncRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SyncRunStatus | EnumSyncRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SyncRunStatus[] | ListEnumSyncRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SyncRunStatus[] | ListEnumSyncRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSyncRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.SyncRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSyncRunStatusFilter<$PrismaModel>
    _max?: NestedEnumSyncRunStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumPositionSideFilter<$PrismaModel = never> = {
    equals?: $Enums.PositionSide | EnumPositionSideFieldRefInput<$PrismaModel>
    in?: $Enums.PositionSide[] | ListEnumPositionSideFieldRefInput<$PrismaModel>
    notIn?: $Enums.PositionSide[] | ListEnumPositionSideFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionSideFilter<$PrismaModel> | $Enums.PositionSide
  }

  export type NestedEnumPositionSideWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PositionSide | EnumPositionSideFieldRefInput<$PrismaModel>
    in?: $Enums.PositionSide[] | ListEnumPositionSideFieldRefInput<$PrismaModel>
    notIn?: $Enums.PositionSide[] | ListEnumPositionSideFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionSideWithAggregatesFilter<$PrismaModel> | $Enums.PositionSide
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPositionSideFilter<$PrismaModel>
    _max?: NestedEnumPositionSideFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AccountBalanceCreateWithoutAccountInput = {
    asset: string
    free: Decimal | DecimalJsLike | number | string
    locked?: Decimal | DecimalJsLike | number | string
    usdValue?: Decimal | DecimalJsLike | number | string | null
    snapshot: SnapshotCreateNestedOneWithoutBalancesInput
  }

  export type AccountBalanceUncheckedCreateWithoutAccountInput = {
    snapshotId: string
    asset: string
    free: Decimal | DecimalJsLike | number | string
    locked?: Decimal | DecimalJsLike | number | string
    usdValue?: Decimal | DecimalJsLike | number | string | null
  }

  export type AccountBalanceCreateOrConnectWithoutAccountInput = {
    where: AccountBalanceWhereUniqueInput
    create: XOR<AccountBalanceCreateWithoutAccountInput, AccountBalanceUncheckedCreateWithoutAccountInput>
  }

  export type AccountBalanceCreateManyAccountInputEnvelope = {
    data: AccountBalanceCreateManyAccountInput | AccountBalanceCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type PositionCreateWithoutAccountInput = {
    symbol: string
    side: $Enums.PositionSide
    size: Decimal | DecimalJsLike | number | string
    entryPrice?: Decimal | DecimalJsLike | number | string | null
    markPrice?: Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: Decimal | DecimalJsLike | number | string | null
    snapshot: SnapshotCreateNestedOneWithoutPositionsInput
  }

  export type PositionUncheckedCreateWithoutAccountInput = {
    snapshotId: string
    symbol: string
    side: $Enums.PositionSide
    size: Decimal | DecimalJsLike | number | string
    entryPrice?: Decimal | DecimalJsLike | number | string | null
    markPrice?: Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: Decimal | DecimalJsLike | number | string | null
  }

  export type PositionCreateOrConnectWithoutAccountInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutAccountInput, PositionUncheckedCreateWithoutAccountInput>
  }

  export type PositionCreateManyAccountInputEnvelope = {
    data: PositionCreateManyAccountInput | PositionCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type TransferCreateWithoutFromAccountInput = {
    id?: string
    ts: Date | string
    asset: string
    amount: Decimal | DecimalJsLike | number | string
    fee?: Decimal | DecimalJsLike | number | string | null
    txid?: string | null
    note?: string | null
    toAccount?: AccountCreateNestedOneWithoutTransfersToInput
  }

  export type TransferUncheckedCreateWithoutFromAccountInput = {
    id?: string
    ts: Date | string
    toAccountId?: string | null
    asset: string
    amount: Decimal | DecimalJsLike | number | string
    fee?: Decimal | DecimalJsLike | number | string | null
    txid?: string | null
    note?: string | null
  }

  export type TransferCreateOrConnectWithoutFromAccountInput = {
    where: TransferWhereUniqueInput
    create: XOR<TransferCreateWithoutFromAccountInput, TransferUncheckedCreateWithoutFromAccountInput>
  }

  export type TransferCreateManyFromAccountInputEnvelope = {
    data: TransferCreateManyFromAccountInput | TransferCreateManyFromAccountInput[]
    skipDuplicates?: boolean
  }

  export type TransferCreateWithoutToAccountInput = {
    id?: string
    ts: Date | string
    asset: string
    amount: Decimal | DecimalJsLike | number | string
    fee?: Decimal | DecimalJsLike | number | string | null
    txid?: string | null
    note?: string | null
    fromAccount?: AccountCreateNestedOneWithoutTransfersFromInput
  }

  export type TransferUncheckedCreateWithoutToAccountInput = {
    id?: string
    ts: Date | string
    fromAccountId?: string | null
    asset: string
    amount: Decimal | DecimalJsLike | number | string
    fee?: Decimal | DecimalJsLike | number | string | null
    txid?: string | null
    note?: string | null
  }

  export type TransferCreateOrConnectWithoutToAccountInput = {
    where: TransferWhereUniqueInput
    create: XOR<TransferCreateWithoutToAccountInput, TransferUncheckedCreateWithoutToAccountInput>
  }

  export type TransferCreateManyToAccountInputEnvelope = {
    data: TransferCreateManyToAccountInput | TransferCreateManyToAccountInput[]
    skipDuplicates?: boolean
  }

  export type AccountBalanceUpsertWithWhereUniqueWithoutAccountInput = {
    where: AccountBalanceWhereUniqueInput
    update: XOR<AccountBalanceUpdateWithoutAccountInput, AccountBalanceUncheckedUpdateWithoutAccountInput>
    create: XOR<AccountBalanceCreateWithoutAccountInput, AccountBalanceUncheckedCreateWithoutAccountInput>
  }

  export type AccountBalanceUpdateWithWhereUniqueWithoutAccountInput = {
    where: AccountBalanceWhereUniqueInput
    data: XOR<AccountBalanceUpdateWithoutAccountInput, AccountBalanceUncheckedUpdateWithoutAccountInput>
  }

  export type AccountBalanceUpdateManyWithWhereWithoutAccountInput = {
    where: AccountBalanceScalarWhereInput
    data: XOR<AccountBalanceUpdateManyMutationInput, AccountBalanceUncheckedUpdateManyWithoutAccountInput>
  }

  export type AccountBalanceScalarWhereInput = {
    AND?: AccountBalanceScalarWhereInput | AccountBalanceScalarWhereInput[]
    OR?: AccountBalanceScalarWhereInput[]
    NOT?: AccountBalanceScalarWhereInput | AccountBalanceScalarWhereInput[]
    snapshotId?: UuidFilter<"AccountBalance"> | string
    accountId?: UuidFilter<"AccountBalance"> | string
    asset?: StringFilter<"AccountBalance"> | string
    free?: DecimalFilter<"AccountBalance"> | Decimal | DecimalJsLike | number | string
    locked?: DecimalFilter<"AccountBalance"> | Decimal | DecimalJsLike | number | string
    usdValue?: DecimalNullableFilter<"AccountBalance"> | Decimal | DecimalJsLike | number | string | null
  }

  export type PositionUpsertWithWhereUniqueWithoutAccountInput = {
    where: PositionWhereUniqueInput
    update: XOR<PositionUpdateWithoutAccountInput, PositionUncheckedUpdateWithoutAccountInput>
    create: XOR<PositionCreateWithoutAccountInput, PositionUncheckedCreateWithoutAccountInput>
  }

  export type PositionUpdateWithWhereUniqueWithoutAccountInput = {
    where: PositionWhereUniqueInput
    data: XOR<PositionUpdateWithoutAccountInput, PositionUncheckedUpdateWithoutAccountInput>
  }

  export type PositionUpdateManyWithWhereWithoutAccountInput = {
    where: PositionScalarWhereInput
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyWithoutAccountInput>
  }

  export type PositionScalarWhereInput = {
    AND?: PositionScalarWhereInput | PositionScalarWhereInput[]
    OR?: PositionScalarWhereInput[]
    NOT?: PositionScalarWhereInput | PositionScalarWhereInput[]
    snapshotId?: UuidFilter<"Position"> | string
    accountId?: UuidFilter<"Position"> | string
    symbol?: StringFilter<"Position"> | string
    side?: EnumPositionSideFilter<"Position"> | $Enums.PositionSide
    size?: DecimalFilter<"Position"> | Decimal | DecimalJsLike | number | string
    entryPrice?: DecimalNullableFilter<"Position"> | Decimal | DecimalJsLike | number | string | null
    markPrice?: DecimalNullableFilter<"Position"> | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: DecimalNullableFilter<"Position"> | Decimal | DecimalJsLike | number | string | null
  }

  export type TransferUpsertWithWhereUniqueWithoutFromAccountInput = {
    where: TransferWhereUniqueInput
    update: XOR<TransferUpdateWithoutFromAccountInput, TransferUncheckedUpdateWithoutFromAccountInput>
    create: XOR<TransferCreateWithoutFromAccountInput, TransferUncheckedCreateWithoutFromAccountInput>
  }

  export type TransferUpdateWithWhereUniqueWithoutFromAccountInput = {
    where: TransferWhereUniqueInput
    data: XOR<TransferUpdateWithoutFromAccountInput, TransferUncheckedUpdateWithoutFromAccountInput>
  }

  export type TransferUpdateManyWithWhereWithoutFromAccountInput = {
    where: TransferScalarWhereInput
    data: XOR<TransferUpdateManyMutationInput, TransferUncheckedUpdateManyWithoutFromAccountInput>
  }

  export type TransferScalarWhereInput = {
    AND?: TransferScalarWhereInput | TransferScalarWhereInput[]
    OR?: TransferScalarWhereInput[]
    NOT?: TransferScalarWhereInput | TransferScalarWhereInput[]
    id?: UuidFilter<"Transfer"> | string
    ts?: DateTimeFilter<"Transfer"> | Date | string
    fromAccountId?: UuidNullableFilter<"Transfer"> | string | null
    toAccountId?: UuidNullableFilter<"Transfer"> | string | null
    asset?: StringFilter<"Transfer"> | string
    amount?: DecimalFilter<"Transfer"> | Decimal | DecimalJsLike | number | string
    fee?: DecimalNullableFilter<"Transfer"> | Decimal | DecimalJsLike | number | string | null
    txid?: StringNullableFilter<"Transfer"> | string | null
    note?: StringNullableFilter<"Transfer"> | string | null
  }

  export type TransferUpsertWithWhereUniqueWithoutToAccountInput = {
    where: TransferWhereUniqueInput
    update: XOR<TransferUpdateWithoutToAccountInput, TransferUncheckedUpdateWithoutToAccountInput>
    create: XOR<TransferCreateWithoutToAccountInput, TransferUncheckedCreateWithoutToAccountInput>
  }

  export type TransferUpdateWithWhereUniqueWithoutToAccountInput = {
    where: TransferWhereUniqueInput
    data: XOR<TransferUpdateWithoutToAccountInput, TransferUncheckedUpdateWithoutToAccountInput>
  }

  export type TransferUpdateManyWithWhereWithoutToAccountInput = {
    where: TransferScalarWhereInput
    data: XOR<TransferUpdateManyMutationInput, TransferUncheckedUpdateManyWithoutToAccountInput>
  }

  export type ProviderSyncRunCreateWithoutSnapshotInput = {
    id?: string
    provider: $Enums.Provider
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SyncRunStatus
    errorMessage?: string | null
  }

  export type ProviderSyncRunUncheckedCreateWithoutSnapshotInput = {
    id?: string
    provider: $Enums.Provider
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SyncRunStatus
    errorMessage?: string | null
  }

  export type ProviderSyncRunCreateOrConnectWithoutSnapshotInput = {
    where: ProviderSyncRunWhereUniqueInput
    create: XOR<ProviderSyncRunCreateWithoutSnapshotInput, ProviderSyncRunUncheckedCreateWithoutSnapshotInput>
  }

  export type ProviderSyncRunCreateManySnapshotInputEnvelope = {
    data: ProviderSyncRunCreateManySnapshotInput | ProviderSyncRunCreateManySnapshotInput[]
    skipDuplicates?: boolean
  }

  export type AccountBalanceCreateWithoutSnapshotInput = {
    asset: string
    free: Decimal | DecimalJsLike | number | string
    locked?: Decimal | DecimalJsLike | number | string
    usdValue?: Decimal | DecimalJsLike | number | string | null
    account: AccountCreateNestedOneWithoutBalancesInput
  }

  export type AccountBalanceUncheckedCreateWithoutSnapshotInput = {
    accountId: string
    asset: string
    free: Decimal | DecimalJsLike | number | string
    locked?: Decimal | DecimalJsLike | number | string
    usdValue?: Decimal | DecimalJsLike | number | string | null
  }

  export type AccountBalanceCreateOrConnectWithoutSnapshotInput = {
    where: AccountBalanceWhereUniqueInput
    create: XOR<AccountBalanceCreateWithoutSnapshotInput, AccountBalanceUncheckedCreateWithoutSnapshotInput>
  }

  export type AccountBalanceCreateManySnapshotInputEnvelope = {
    data: AccountBalanceCreateManySnapshotInput | AccountBalanceCreateManySnapshotInput[]
    skipDuplicates?: boolean
  }

  export type PositionCreateWithoutSnapshotInput = {
    symbol: string
    side: $Enums.PositionSide
    size: Decimal | DecimalJsLike | number | string
    entryPrice?: Decimal | DecimalJsLike | number | string | null
    markPrice?: Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: Decimal | DecimalJsLike | number | string | null
    account: AccountCreateNestedOneWithoutPositionsInput
  }

  export type PositionUncheckedCreateWithoutSnapshotInput = {
    accountId: string
    symbol: string
    side: $Enums.PositionSide
    size: Decimal | DecimalJsLike | number | string
    entryPrice?: Decimal | DecimalJsLike | number | string | null
    markPrice?: Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: Decimal | DecimalJsLike | number | string | null
  }

  export type PositionCreateOrConnectWithoutSnapshotInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutSnapshotInput, PositionUncheckedCreateWithoutSnapshotInput>
  }

  export type PositionCreateManySnapshotInputEnvelope = {
    data: PositionCreateManySnapshotInput | PositionCreateManySnapshotInput[]
    skipDuplicates?: boolean
  }

  export type RawEventCreateWithoutSnapshotInput = {
    id?: string
    provider: $Enums.Provider
    ts?: Date | string
    eventType: string
    payloadJson: JsonNullValueInput | InputJsonValue
    payloadHash: string
  }

  export type RawEventUncheckedCreateWithoutSnapshotInput = {
    id?: string
    provider: $Enums.Provider
    ts?: Date | string
    eventType: string
    payloadJson: JsonNullValueInput | InputJsonValue
    payloadHash: string
  }

  export type RawEventCreateOrConnectWithoutSnapshotInput = {
    where: RawEventWhereUniqueInput
    create: XOR<RawEventCreateWithoutSnapshotInput, RawEventUncheckedCreateWithoutSnapshotInput>
  }

  export type RawEventCreateManySnapshotInputEnvelope = {
    data: RawEventCreateManySnapshotInput | RawEventCreateManySnapshotInput[]
    skipDuplicates?: boolean
  }

  export type ProviderSyncRunUpsertWithWhereUniqueWithoutSnapshotInput = {
    where: ProviderSyncRunWhereUniqueInput
    update: XOR<ProviderSyncRunUpdateWithoutSnapshotInput, ProviderSyncRunUncheckedUpdateWithoutSnapshotInput>
    create: XOR<ProviderSyncRunCreateWithoutSnapshotInput, ProviderSyncRunUncheckedCreateWithoutSnapshotInput>
  }

  export type ProviderSyncRunUpdateWithWhereUniqueWithoutSnapshotInput = {
    where: ProviderSyncRunWhereUniqueInput
    data: XOR<ProviderSyncRunUpdateWithoutSnapshotInput, ProviderSyncRunUncheckedUpdateWithoutSnapshotInput>
  }

  export type ProviderSyncRunUpdateManyWithWhereWithoutSnapshotInput = {
    where: ProviderSyncRunScalarWhereInput
    data: XOR<ProviderSyncRunUpdateManyMutationInput, ProviderSyncRunUncheckedUpdateManyWithoutSnapshotInput>
  }

  export type ProviderSyncRunScalarWhereInput = {
    AND?: ProviderSyncRunScalarWhereInput | ProviderSyncRunScalarWhereInput[]
    OR?: ProviderSyncRunScalarWhereInput[]
    NOT?: ProviderSyncRunScalarWhereInput | ProviderSyncRunScalarWhereInput[]
    id?: UuidFilter<"ProviderSyncRun"> | string
    snapshotId?: UuidFilter<"ProviderSyncRun"> | string
    provider?: EnumProviderFilter<"ProviderSyncRun"> | $Enums.Provider
    startedAt?: DateTimeFilter<"ProviderSyncRun"> | Date | string
    finishedAt?: DateTimeNullableFilter<"ProviderSyncRun"> | Date | string | null
    status?: EnumSyncRunStatusFilter<"ProviderSyncRun"> | $Enums.SyncRunStatus
    errorMessage?: StringNullableFilter<"ProviderSyncRun"> | string | null
  }

  export type AccountBalanceUpsertWithWhereUniqueWithoutSnapshotInput = {
    where: AccountBalanceWhereUniqueInput
    update: XOR<AccountBalanceUpdateWithoutSnapshotInput, AccountBalanceUncheckedUpdateWithoutSnapshotInput>
    create: XOR<AccountBalanceCreateWithoutSnapshotInput, AccountBalanceUncheckedCreateWithoutSnapshotInput>
  }

  export type AccountBalanceUpdateWithWhereUniqueWithoutSnapshotInput = {
    where: AccountBalanceWhereUniqueInput
    data: XOR<AccountBalanceUpdateWithoutSnapshotInput, AccountBalanceUncheckedUpdateWithoutSnapshotInput>
  }

  export type AccountBalanceUpdateManyWithWhereWithoutSnapshotInput = {
    where: AccountBalanceScalarWhereInput
    data: XOR<AccountBalanceUpdateManyMutationInput, AccountBalanceUncheckedUpdateManyWithoutSnapshotInput>
  }

  export type PositionUpsertWithWhereUniqueWithoutSnapshotInput = {
    where: PositionWhereUniqueInput
    update: XOR<PositionUpdateWithoutSnapshotInput, PositionUncheckedUpdateWithoutSnapshotInput>
    create: XOR<PositionCreateWithoutSnapshotInput, PositionUncheckedCreateWithoutSnapshotInput>
  }

  export type PositionUpdateWithWhereUniqueWithoutSnapshotInput = {
    where: PositionWhereUniqueInput
    data: XOR<PositionUpdateWithoutSnapshotInput, PositionUncheckedUpdateWithoutSnapshotInput>
  }

  export type PositionUpdateManyWithWhereWithoutSnapshotInput = {
    where: PositionScalarWhereInput
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyWithoutSnapshotInput>
  }

  export type RawEventUpsertWithWhereUniqueWithoutSnapshotInput = {
    where: RawEventWhereUniqueInput
    update: XOR<RawEventUpdateWithoutSnapshotInput, RawEventUncheckedUpdateWithoutSnapshotInput>
    create: XOR<RawEventCreateWithoutSnapshotInput, RawEventUncheckedCreateWithoutSnapshotInput>
  }

  export type RawEventUpdateWithWhereUniqueWithoutSnapshotInput = {
    where: RawEventWhereUniqueInput
    data: XOR<RawEventUpdateWithoutSnapshotInput, RawEventUncheckedUpdateWithoutSnapshotInput>
  }

  export type RawEventUpdateManyWithWhereWithoutSnapshotInput = {
    where: RawEventScalarWhereInput
    data: XOR<RawEventUpdateManyMutationInput, RawEventUncheckedUpdateManyWithoutSnapshotInput>
  }

  export type RawEventScalarWhereInput = {
    AND?: RawEventScalarWhereInput | RawEventScalarWhereInput[]
    OR?: RawEventScalarWhereInput[]
    NOT?: RawEventScalarWhereInput | RawEventScalarWhereInput[]
    id?: UuidFilter<"RawEvent"> | string
    provider?: EnumProviderFilter<"RawEvent"> | $Enums.Provider
    snapshotId?: UuidNullableFilter<"RawEvent"> | string | null
    ts?: DateTimeFilter<"RawEvent"> | Date | string
    eventType?: StringFilter<"RawEvent"> | string
    payloadJson?: JsonFilter<"RawEvent">
    payloadHash?: StringFilter<"RawEvent"> | string
  }

  export type SnapshotCreateWithoutProviderSyncRunsInput = {
    id?: string
    snapshotDate: Date | string
    createdAt?: Date | string
    source?: $Enums.SnapshotSource
    status?: $Enums.SnapshotStatus
    notes?: string | null
    balances?: AccountBalanceCreateNestedManyWithoutSnapshotInput
    positions?: PositionCreateNestedManyWithoutSnapshotInput
    rawEvents?: RawEventCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotUncheckedCreateWithoutProviderSyncRunsInput = {
    id?: string
    snapshotDate: Date | string
    createdAt?: Date | string
    source?: $Enums.SnapshotSource
    status?: $Enums.SnapshotStatus
    notes?: string | null
    balances?: AccountBalanceUncheckedCreateNestedManyWithoutSnapshotInput
    positions?: PositionUncheckedCreateNestedManyWithoutSnapshotInput
    rawEvents?: RawEventUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotCreateOrConnectWithoutProviderSyncRunsInput = {
    where: SnapshotWhereUniqueInput
    create: XOR<SnapshotCreateWithoutProviderSyncRunsInput, SnapshotUncheckedCreateWithoutProviderSyncRunsInput>
  }

  export type SnapshotUpsertWithoutProviderSyncRunsInput = {
    update: XOR<SnapshotUpdateWithoutProviderSyncRunsInput, SnapshotUncheckedUpdateWithoutProviderSyncRunsInput>
    create: XOR<SnapshotCreateWithoutProviderSyncRunsInput, SnapshotUncheckedCreateWithoutProviderSyncRunsInput>
    where?: SnapshotWhereInput
  }

  export type SnapshotUpdateToOneWithWhereWithoutProviderSyncRunsInput = {
    where?: SnapshotWhereInput
    data: XOR<SnapshotUpdateWithoutProviderSyncRunsInput, SnapshotUncheckedUpdateWithoutProviderSyncRunsInput>
  }

  export type SnapshotUpdateWithoutProviderSyncRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSnapshotSourceFieldUpdateOperationsInput | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    balances?: AccountBalanceUpdateManyWithoutSnapshotNestedInput
    positions?: PositionUpdateManyWithoutSnapshotNestedInput
    rawEvents?: RawEventUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateWithoutProviderSyncRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSnapshotSourceFieldUpdateOperationsInput | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    balances?: AccountBalanceUncheckedUpdateManyWithoutSnapshotNestedInput
    positions?: PositionUncheckedUpdateManyWithoutSnapshotNestedInput
    rawEvents?: RawEventUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotCreateWithoutBalancesInput = {
    id?: string
    snapshotDate: Date | string
    createdAt?: Date | string
    source?: $Enums.SnapshotSource
    status?: $Enums.SnapshotStatus
    notes?: string | null
    providerSyncRuns?: ProviderSyncRunCreateNestedManyWithoutSnapshotInput
    positions?: PositionCreateNestedManyWithoutSnapshotInput
    rawEvents?: RawEventCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotUncheckedCreateWithoutBalancesInput = {
    id?: string
    snapshotDate: Date | string
    createdAt?: Date | string
    source?: $Enums.SnapshotSource
    status?: $Enums.SnapshotStatus
    notes?: string | null
    providerSyncRuns?: ProviderSyncRunUncheckedCreateNestedManyWithoutSnapshotInput
    positions?: PositionUncheckedCreateNestedManyWithoutSnapshotInput
    rawEvents?: RawEventUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotCreateOrConnectWithoutBalancesInput = {
    where: SnapshotWhereUniqueInput
    create: XOR<SnapshotCreateWithoutBalancesInput, SnapshotUncheckedCreateWithoutBalancesInput>
  }

  export type AccountCreateWithoutBalancesInput = {
    id?: string
    provider: $Enums.Provider
    label: string
    baseCurrency?: string
    createdAt?: Date | string
    positions?: PositionCreateNestedManyWithoutAccountInput
    transfersFrom?: TransferCreateNestedManyWithoutFromAccountInput
    transfersTo?: TransferCreateNestedManyWithoutToAccountInput
  }

  export type AccountUncheckedCreateWithoutBalancesInput = {
    id?: string
    provider: $Enums.Provider
    label: string
    baseCurrency?: string
    createdAt?: Date | string
    positions?: PositionUncheckedCreateNestedManyWithoutAccountInput
    transfersFrom?: TransferUncheckedCreateNestedManyWithoutFromAccountInput
    transfersTo?: TransferUncheckedCreateNestedManyWithoutToAccountInput
  }

  export type AccountCreateOrConnectWithoutBalancesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutBalancesInput, AccountUncheckedCreateWithoutBalancesInput>
  }

  export type SnapshotUpsertWithoutBalancesInput = {
    update: XOR<SnapshotUpdateWithoutBalancesInput, SnapshotUncheckedUpdateWithoutBalancesInput>
    create: XOR<SnapshotCreateWithoutBalancesInput, SnapshotUncheckedCreateWithoutBalancesInput>
    where?: SnapshotWhereInput
  }

  export type SnapshotUpdateToOneWithWhereWithoutBalancesInput = {
    where?: SnapshotWhereInput
    data: XOR<SnapshotUpdateWithoutBalancesInput, SnapshotUncheckedUpdateWithoutBalancesInput>
  }

  export type SnapshotUpdateWithoutBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSnapshotSourceFieldUpdateOperationsInput | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    providerSyncRuns?: ProviderSyncRunUpdateManyWithoutSnapshotNestedInput
    positions?: PositionUpdateManyWithoutSnapshotNestedInput
    rawEvents?: RawEventUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateWithoutBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSnapshotSourceFieldUpdateOperationsInput | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    providerSyncRuns?: ProviderSyncRunUncheckedUpdateManyWithoutSnapshotNestedInput
    positions?: PositionUncheckedUpdateManyWithoutSnapshotNestedInput
    rawEvents?: RawEventUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type AccountUpsertWithoutBalancesInput = {
    update: XOR<AccountUpdateWithoutBalancesInput, AccountUncheckedUpdateWithoutBalancesInput>
    create: XOR<AccountCreateWithoutBalancesInput, AccountUncheckedCreateWithoutBalancesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutBalancesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutBalancesInput, AccountUncheckedUpdateWithoutBalancesInput>
  }

  export type AccountUpdateWithoutBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    label?: StringFieldUpdateOperationsInput | string
    baseCurrency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUpdateManyWithoutAccountNestedInput
    transfersFrom?: TransferUpdateManyWithoutFromAccountNestedInput
    transfersTo?: TransferUpdateManyWithoutToAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    label?: StringFieldUpdateOperationsInput | string
    baseCurrency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUncheckedUpdateManyWithoutAccountNestedInput
    transfersFrom?: TransferUncheckedUpdateManyWithoutFromAccountNestedInput
    transfersTo?: TransferUncheckedUpdateManyWithoutToAccountNestedInput
  }

  export type SnapshotCreateWithoutPositionsInput = {
    id?: string
    snapshotDate: Date | string
    createdAt?: Date | string
    source?: $Enums.SnapshotSource
    status?: $Enums.SnapshotStatus
    notes?: string | null
    providerSyncRuns?: ProviderSyncRunCreateNestedManyWithoutSnapshotInput
    balances?: AccountBalanceCreateNestedManyWithoutSnapshotInput
    rawEvents?: RawEventCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotUncheckedCreateWithoutPositionsInput = {
    id?: string
    snapshotDate: Date | string
    createdAt?: Date | string
    source?: $Enums.SnapshotSource
    status?: $Enums.SnapshotStatus
    notes?: string | null
    providerSyncRuns?: ProviderSyncRunUncheckedCreateNestedManyWithoutSnapshotInput
    balances?: AccountBalanceUncheckedCreateNestedManyWithoutSnapshotInput
    rawEvents?: RawEventUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotCreateOrConnectWithoutPositionsInput = {
    where: SnapshotWhereUniqueInput
    create: XOR<SnapshotCreateWithoutPositionsInput, SnapshotUncheckedCreateWithoutPositionsInput>
  }

  export type AccountCreateWithoutPositionsInput = {
    id?: string
    provider: $Enums.Provider
    label: string
    baseCurrency?: string
    createdAt?: Date | string
    balances?: AccountBalanceCreateNestedManyWithoutAccountInput
    transfersFrom?: TransferCreateNestedManyWithoutFromAccountInput
    transfersTo?: TransferCreateNestedManyWithoutToAccountInput
  }

  export type AccountUncheckedCreateWithoutPositionsInput = {
    id?: string
    provider: $Enums.Provider
    label: string
    baseCurrency?: string
    createdAt?: Date | string
    balances?: AccountBalanceUncheckedCreateNestedManyWithoutAccountInput
    transfersFrom?: TransferUncheckedCreateNestedManyWithoutFromAccountInput
    transfersTo?: TransferUncheckedCreateNestedManyWithoutToAccountInput
  }

  export type AccountCreateOrConnectWithoutPositionsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutPositionsInput, AccountUncheckedCreateWithoutPositionsInput>
  }

  export type SnapshotUpsertWithoutPositionsInput = {
    update: XOR<SnapshotUpdateWithoutPositionsInput, SnapshotUncheckedUpdateWithoutPositionsInput>
    create: XOR<SnapshotCreateWithoutPositionsInput, SnapshotUncheckedCreateWithoutPositionsInput>
    where?: SnapshotWhereInput
  }

  export type SnapshotUpdateToOneWithWhereWithoutPositionsInput = {
    where?: SnapshotWhereInput
    data: XOR<SnapshotUpdateWithoutPositionsInput, SnapshotUncheckedUpdateWithoutPositionsInput>
  }

  export type SnapshotUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSnapshotSourceFieldUpdateOperationsInput | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    providerSyncRuns?: ProviderSyncRunUpdateManyWithoutSnapshotNestedInput
    balances?: AccountBalanceUpdateManyWithoutSnapshotNestedInput
    rawEvents?: RawEventUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSnapshotSourceFieldUpdateOperationsInput | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    providerSyncRuns?: ProviderSyncRunUncheckedUpdateManyWithoutSnapshotNestedInput
    balances?: AccountBalanceUncheckedUpdateManyWithoutSnapshotNestedInput
    rawEvents?: RawEventUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type AccountUpsertWithoutPositionsInput = {
    update: XOR<AccountUpdateWithoutPositionsInput, AccountUncheckedUpdateWithoutPositionsInput>
    create: XOR<AccountCreateWithoutPositionsInput, AccountUncheckedCreateWithoutPositionsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutPositionsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutPositionsInput, AccountUncheckedUpdateWithoutPositionsInput>
  }

  export type AccountUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    label?: StringFieldUpdateOperationsInput | string
    baseCurrency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: AccountBalanceUpdateManyWithoutAccountNestedInput
    transfersFrom?: TransferUpdateManyWithoutFromAccountNestedInput
    transfersTo?: TransferUpdateManyWithoutToAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    label?: StringFieldUpdateOperationsInput | string
    baseCurrency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: AccountBalanceUncheckedUpdateManyWithoutAccountNestedInput
    transfersFrom?: TransferUncheckedUpdateManyWithoutFromAccountNestedInput
    transfersTo?: TransferUncheckedUpdateManyWithoutToAccountNestedInput
  }

  export type AccountCreateWithoutTransfersFromInput = {
    id?: string
    provider: $Enums.Provider
    label: string
    baseCurrency?: string
    createdAt?: Date | string
    balances?: AccountBalanceCreateNestedManyWithoutAccountInput
    positions?: PositionCreateNestedManyWithoutAccountInput
    transfersTo?: TransferCreateNestedManyWithoutToAccountInput
  }

  export type AccountUncheckedCreateWithoutTransfersFromInput = {
    id?: string
    provider: $Enums.Provider
    label: string
    baseCurrency?: string
    createdAt?: Date | string
    balances?: AccountBalanceUncheckedCreateNestedManyWithoutAccountInput
    positions?: PositionUncheckedCreateNestedManyWithoutAccountInput
    transfersTo?: TransferUncheckedCreateNestedManyWithoutToAccountInput
  }

  export type AccountCreateOrConnectWithoutTransfersFromInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTransfersFromInput, AccountUncheckedCreateWithoutTransfersFromInput>
  }

  export type AccountCreateWithoutTransfersToInput = {
    id?: string
    provider: $Enums.Provider
    label: string
    baseCurrency?: string
    createdAt?: Date | string
    balances?: AccountBalanceCreateNestedManyWithoutAccountInput
    positions?: PositionCreateNestedManyWithoutAccountInput
    transfersFrom?: TransferCreateNestedManyWithoutFromAccountInput
  }

  export type AccountUncheckedCreateWithoutTransfersToInput = {
    id?: string
    provider: $Enums.Provider
    label: string
    baseCurrency?: string
    createdAt?: Date | string
    balances?: AccountBalanceUncheckedCreateNestedManyWithoutAccountInput
    positions?: PositionUncheckedCreateNestedManyWithoutAccountInput
    transfersFrom?: TransferUncheckedCreateNestedManyWithoutFromAccountInput
  }

  export type AccountCreateOrConnectWithoutTransfersToInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTransfersToInput, AccountUncheckedCreateWithoutTransfersToInput>
  }

  export type AccountUpsertWithoutTransfersFromInput = {
    update: XOR<AccountUpdateWithoutTransfersFromInput, AccountUncheckedUpdateWithoutTransfersFromInput>
    create: XOR<AccountCreateWithoutTransfersFromInput, AccountUncheckedCreateWithoutTransfersFromInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTransfersFromInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTransfersFromInput, AccountUncheckedUpdateWithoutTransfersFromInput>
  }

  export type AccountUpdateWithoutTransfersFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    label?: StringFieldUpdateOperationsInput | string
    baseCurrency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: AccountBalanceUpdateManyWithoutAccountNestedInput
    positions?: PositionUpdateManyWithoutAccountNestedInput
    transfersTo?: TransferUpdateManyWithoutToAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutTransfersFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    label?: StringFieldUpdateOperationsInput | string
    baseCurrency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: AccountBalanceUncheckedUpdateManyWithoutAccountNestedInput
    positions?: PositionUncheckedUpdateManyWithoutAccountNestedInput
    transfersTo?: TransferUncheckedUpdateManyWithoutToAccountNestedInput
  }

  export type AccountUpsertWithoutTransfersToInput = {
    update: XOR<AccountUpdateWithoutTransfersToInput, AccountUncheckedUpdateWithoutTransfersToInput>
    create: XOR<AccountCreateWithoutTransfersToInput, AccountUncheckedCreateWithoutTransfersToInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTransfersToInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTransfersToInput, AccountUncheckedUpdateWithoutTransfersToInput>
  }

  export type AccountUpdateWithoutTransfersToInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    label?: StringFieldUpdateOperationsInput | string
    baseCurrency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: AccountBalanceUpdateManyWithoutAccountNestedInput
    positions?: PositionUpdateManyWithoutAccountNestedInput
    transfersFrom?: TransferUpdateManyWithoutFromAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutTransfersToInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    label?: StringFieldUpdateOperationsInput | string
    baseCurrency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: AccountBalanceUncheckedUpdateManyWithoutAccountNestedInput
    positions?: PositionUncheckedUpdateManyWithoutAccountNestedInput
    transfersFrom?: TransferUncheckedUpdateManyWithoutFromAccountNestedInput
  }

  export type SnapshotCreateWithoutRawEventsInput = {
    id?: string
    snapshotDate: Date | string
    createdAt?: Date | string
    source?: $Enums.SnapshotSource
    status?: $Enums.SnapshotStatus
    notes?: string | null
    providerSyncRuns?: ProviderSyncRunCreateNestedManyWithoutSnapshotInput
    balances?: AccountBalanceCreateNestedManyWithoutSnapshotInput
    positions?: PositionCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotUncheckedCreateWithoutRawEventsInput = {
    id?: string
    snapshotDate: Date | string
    createdAt?: Date | string
    source?: $Enums.SnapshotSource
    status?: $Enums.SnapshotStatus
    notes?: string | null
    providerSyncRuns?: ProviderSyncRunUncheckedCreateNestedManyWithoutSnapshotInput
    balances?: AccountBalanceUncheckedCreateNestedManyWithoutSnapshotInput
    positions?: PositionUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotCreateOrConnectWithoutRawEventsInput = {
    where: SnapshotWhereUniqueInput
    create: XOR<SnapshotCreateWithoutRawEventsInput, SnapshotUncheckedCreateWithoutRawEventsInput>
  }

  export type SnapshotUpsertWithoutRawEventsInput = {
    update: XOR<SnapshotUpdateWithoutRawEventsInput, SnapshotUncheckedUpdateWithoutRawEventsInput>
    create: XOR<SnapshotCreateWithoutRawEventsInput, SnapshotUncheckedCreateWithoutRawEventsInput>
    where?: SnapshotWhereInput
  }

  export type SnapshotUpdateToOneWithWhereWithoutRawEventsInput = {
    where?: SnapshotWhereInput
    data: XOR<SnapshotUpdateWithoutRawEventsInput, SnapshotUncheckedUpdateWithoutRawEventsInput>
  }

  export type SnapshotUpdateWithoutRawEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSnapshotSourceFieldUpdateOperationsInput | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    providerSyncRuns?: ProviderSyncRunUpdateManyWithoutSnapshotNestedInput
    balances?: AccountBalanceUpdateManyWithoutSnapshotNestedInput
    positions?: PositionUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateWithoutRawEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSnapshotSourceFieldUpdateOperationsInput | $Enums.SnapshotSource
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    providerSyncRuns?: ProviderSyncRunUncheckedUpdateManyWithoutSnapshotNestedInput
    balances?: AccountBalanceUncheckedUpdateManyWithoutSnapshotNestedInput
    positions?: PositionUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type AccountBalanceCreateManyAccountInput = {
    snapshotId: string
    asset: string
    free: Decimal | DecimalJsLike | number | string
    locked?: Decimal | DecimalJsLike | number | string
    usdValue?: Decimal | DecimalJsLike | number | string | null
  }

  export type PositionCreateManyAccountInput = {
    snapshotId: string
    symbol: string
    side: $Enums.PositionSide
    size: Decimal | DecimalJsLike | number | string
    entryPrice?: Decimal | DecimalJsLike | number | string | null
    markPrice?: Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: Decimal | DecimalJsLike | number | string | null
  }

  export type TransferCreateManyFromAccountInput = {
    id?: string
    ts: Date | string
    toAccountId?: string | null
    asset: string
    amount: Decimal | DecimalJsLike | number | string
    fee?: Decimal | DecimalJsLike | number | string | null
    txid?: string | null
    note?: string | null
  }

  export type TransferCreateManyToAccountInput = {
    id?: string
    ts: Date | string
    fromAccountId?: string | null
    asset: string
    amount: Decimal | DecimalJsLike | number | string
    fee?: Decimal | DecimalJsLike | number | string | null
    txid?: string | null
    note?: string | null
  }

  export type AccountBalanceUpdateWithoutAccountInput = {
    asset?: StringFieldUpdateOperationsInput | string
    free?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    snapshot?: SnapshotUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type AccountBalanceUncheckedUpdateWithoutAccountInput = {
    snapshotId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    free?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type AccountBalanceUncheckedUpdateManyWithoutAccountInput = {
    snapshotId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    free?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PositionUpdateWithoutAccountInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    side?: EnumPositionSideFieldUpdateOperationsInput | $Enums.PositionSide
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entryPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    snapshot?: SnapshotUpdateOneRequiredWithoutPositionsNestedInput
  }

  export type PositionUncheckedUpdateWithoutAccountInput = {
    snapshotId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    side?: EnumPositionSideFieldUpdateOperationsInput | $Enums.PositionSide
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entryPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PositionUncheckedUpdateManyWithoutAccountInput = {
    snapshotId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    side?: EnumPositionSideFieldUpdateOperationsInput | $Enums.PositionSide
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entryPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TransferUpdateWithoutFromAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txid?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    toAccount?: AccountUpdateOneWithoutTransfersToNestedInput
  }

  export type TransferUncheckedUpdateWithoutFromAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    toAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txid?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransferUncheckedUpdateManyWithoutFromAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    toAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txid?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransferUpdateWithoutToAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txid?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fromAccount?: AccountUpdateOneWithoutTransfersFromNestedInput
  }

  export type TransferUncheckedUpdateWithoutToAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    fromAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txid?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransferUncheckedUpdateManyWithoutToAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    fromAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txid?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProviderSyncRunCreateManySnapshotInput = {
    id?: string
    provider: $Enums.Provider
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SyncRunStatus
    errorMessage?: string | null
  }

  export type AccountBalanceCreateManySnapshotInput = {
    accountId: string
    asset: string
    free: Decimal | DecimalJsLike | number | string
    locked?: Decimal | DecimalJsLike | number | string
    usdValue?: Decimal | DecimalJsLike | number | string | null
  }

  export type PositionCreateManySnapshotInput = {
    accountId: string
    symbol: string
    side: $Enums.PositionSide
    size: Decimal | DecimalJsLike | number | string
    entryPrice?: Decimal | DecimalJsLike | number | string | null
    markPrice?: Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: Decimal | DecimalJsLike | number | string | null
  }

  export type RawEventCreateManySnapshotInput = {
    id?: string
    provider: $Enums.Provider
    ts?: Date | string
    eventType: string
    payloadJson: JsonNullValueInput | InputJsonValue
    payloadHash: string
  }

  export type ProviderSyncRunUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSyncRunStatusFieldUpdateOperationsInput | $Enums.SyncRunStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProviderSyncRunUncheckedUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSyncRunStatusFieldUpdateOperationsInput | $Enums.SyncRunStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProviderSyncRunUncheckedUpdateManyWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSyncRunStatusFieldUpdateOperationsInput | $Enums.SyncRunStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountBalanceUpdateWithoutSnapshotInput = {
    asset?: StringFieldUpdateOperationsInput | string
    free?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    account?: AccountUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type AccountBalanceUncheckedUpdateWithoutSnapshotInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    free?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type AccountBalanceUncheckedUpdateManyWithoutSnapshotInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    free?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PositionUpdateWithoutSnapshotInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    side?: EnumPositionSideFieldUpdateOperationsInput | $Enums.PositionSide
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entryPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    account?: AccountUpdateOneRequiredWithoutPositionsNestedInput
  }

  export type PositionUncheckedUpdateWithoutSnapshotInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    side?: EnumPositionSideFieldUpdateOperationsInput | $Enums.PositionSide
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entryPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PositionUncheckedUpdateManyWithoutSnapshotInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    side?: EnumPositionSideFieldUpdateOperationsInput | $Enums.PositionSide
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entryPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pnlUnrealizedUsd?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type RawEventUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    payloadHash?: StringFieldUpdateOperationsInput | string
  }

  export type RawEventUncheckedUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    payloadHash?: StringFieldUpdateOperationsInput | string
  }

  export type RawEventUncheckedUpdateManyWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    payloadHash?: StringFieldUpdateOperationsInput | string
  }



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