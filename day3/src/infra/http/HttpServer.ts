export type methods = 'get' | 'post' | 'put' | 'patch';
interface ParsedQs { [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[] }

export type request = {
  params: Record<string, string>
  query: ParsedQs
  body: any
}

export type httpCallback = (request: request) => object

export default interface HttpServer {
	on (method: methods, path: string, callback: httpCallback): void;
	listen (port: number): void;
}
