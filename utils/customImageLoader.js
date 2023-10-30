export default function customImageLoader({ width, src }) {
  return `${src.replace(/ /g, '%20',)}?width=${width}`;
}
