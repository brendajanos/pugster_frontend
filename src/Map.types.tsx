export interface IProps {
  initialLng: number;
  initialLat: number;
  initialZoom: number;
  onLocationChange: (lng: number, lat: number, zoom: number) => void;
}
export interface IMarkerProps {
  coordinate: [number, number];
  children: JSX.Element;
}
