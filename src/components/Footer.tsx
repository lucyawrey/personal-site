import Text from "../content/text.json";

function Footer() {
  return (
    <div className="text-center p-6 bg-gray-200">
      <span>{Text.copy}</span>
    </div>
  )
}
  
export default Footer;
