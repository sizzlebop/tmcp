declare module '@tmcp/transport-http' {
	import type { McpServer } from 'tmcp';
	import type { OAuth } from '@tmcp/auth';
	export class HttpTransport {
		
		constructor(server: McpServer<any>, options?: HttpTransportOptions);
		
		respond(request: Request): Promise<Response | null>;
		#private;
	}
	export type HttpTransportOptions = {
		getSessionId?: () => string;
		path?: string;
		oauth?: OAuth<"built">;
	};

	export {};
}

//# sourceMappingURL=index.d.ts.map