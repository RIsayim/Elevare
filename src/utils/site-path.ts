const baseUrl = import.meta.env.BASE_URL;
const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
const basePath = normalizedBaseUrl === '/' ? '' : normalizedBaseUrl.slice(0, -1);

/** Prefix a local site path with Astro's configured base URL. */
export function withBase(path: string): string {
	if (/^(?:[a-z][a-z\d+.-]*:|\/\/|data:|#)/i.test(path)) return path;

	const pathWithoutQueryOrFragment = path.split(/[?#]/, 1)[0];
	if (!basePath || pathWithoutQueryOrFragment === basePath || pathWithoutQueryOrFragment.startsWith(`${basePath}/`)) return path;

	const normalizedPath = path.replace(/^\/+/, '');
	return normalizedPath ? `${normalizedBaseUrl}${normalizedPath}` : normalizedBaseUrl;
}
