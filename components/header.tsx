import { Button } from "./ui/button"

export const Header = () => {
  return (
    <div className="flex justify-between py-4 px-[72px]">
      <div className="flex items-center gap-6">
        <img src="./logo.png" alt="logo" width={64} height={64} />
        <div>
          <p className="text-white">Browse Spaces</p>
        </div>
      </div>
      <div>
        <Button>Become a Host</Button>
      </div>
    </div>
  )
}
