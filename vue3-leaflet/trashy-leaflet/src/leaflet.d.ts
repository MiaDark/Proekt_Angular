// shims/leaflet.d.ts
declare module 'leaflet' {
    import { LatLngExpression, Map, Marker, CircleMarker, Icon } from 'leaflet';
  
    export {
      LatLngExpression,
      Map,
      Marker,
      CircleMarker,
      Icon,
    };
  
    export function map(element: string | HTMLElement, options?: MapOptions): Map;
  }
  