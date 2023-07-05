import { createServerClient as _createServerClient } from '@supabase/auth-helpers-remix';
import { Database } from './database.types';

export const createServerClient = ({
	request,
	response
}: {
	request: Request;
	response: Response;
}) =>
	_createServerClient<Database>(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
		request,
		response
	});