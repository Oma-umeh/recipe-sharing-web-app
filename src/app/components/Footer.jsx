

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white h-[100px] flex items-center justify-center text-lg">
              <p><sup>&copy;</sup>Tasty Shoppers{new Date().getFullYear()}</p>
    </footer>
  )
}
