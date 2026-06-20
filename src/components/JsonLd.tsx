type JsonLdData = Record<string, unknown>;

/**
 * Renders one or more JSON-LD objects inside a single script element.
 *
 * The serialized JSON is escaped so that a "<" inside any string value (for
 * example article content) cannot prematurely close the script element or
 * inject markup. This is a server component and emits no client JavaScript.
 */
export default function JsonLd({ data }: { data: JsonLdData | JsonLdData[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
