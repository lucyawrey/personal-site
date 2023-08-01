import Text from "content/text.json" assert { type: "json" };

function Footer() {
  return (
    <div class="text-center p-6 bg-gray-200">
      <span>{Text.copy}</span>
    </div>
  )
}
  
export default Footer;
