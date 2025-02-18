export interface Token {
  value: string;
  type: string;
  subtype: string;
  isImplicitIntersection?: boolean;
}

export interface Options {
  language?: 'en-US' | 'de-DE' | 'en-EU';
  separator: string;
  argumentSeparator?:string;
  keepPrefixOperators: boolean;
  preserveLanguage?: boolean;
  asClass?: boolean;
}

declare function tokenize(str: string, options?: Options): Token[];
