//@flow

// Module Types
export type AMD = "amd";
export type Commonjs = "commonjs";
export type Systemjs = "systemjs";
export type UMD = "umd";
export type Module = AMD | Commonjs | Systemjs | UMD;

// Target types
type TargetType = number;
type NodeType = TargetType | "current" | true;

// Options
export type ModuleOption = Module | boolean;
export type BrowserslistQuery = Array<string> | string;
export type TargetsOption = {
  browsers?: BrowserslistQuery,
  node?: NodeType,
  [string]: TargetType
};

export type Options = {
  whitelist?: Array<string>,
  include?: Array<string>,
  exclude?: Array<string>,
  modules?: ModuleOption,
  debug?: boolean,
  loose?: boolean,
  moduleType?: ModuleOption,
  targets?: TargetsOption,
  useBuiltIns?: boolean
}
