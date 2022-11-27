import { FcGoogle } from "react-icons/fc"
import Link from "next/link"

export default function Page() {
    return (
        <div className="flex w-screen h-screen">
            <div className="basis-1/2"></div>
            <div className="basis-1/2 bg-healtick-cream rounded-l-lg flex justify-center items-center">
                <div className="w-3/4 h-full relative flex flex-col justify-center items-center">
                    <div className="absolute flex flex-row justify-between w-full top-12">
                        <Link href="/">Kembali ke beranda</Link>
                        <h3>Healtick</h3>
                    </div>
                    <form className="flex flex-col w-full gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="email">E-mail</label>
                            <input
                                name="email"
                                type="email"
                                className="border w-full py-2 px-4 rounded-lg"
                            ></input>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                className="border w-full py-2 px-4 rounded-lg"
                            ></input>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">
                                Konfirmasi Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                className="border w-full py-2 px-4 rounded-lg"
                            ></input>
                        </div>
                        <div className="flex justify-center items-center py-3 rounded-lg my-2 bg-healtick-darkgreen text-white font-semibold">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                    <h3 className="font-medium">Or</h3>
                    <button className="flex w-full flex-row justify-center items-center text-white bg-blue-400 font-semibold gap-2 rounded-md border px-6 py-3 my-2">
                        <span>
                            <FcGoogle />
                        </span>
                        Login with Google
                    </button>
                    <div>
                        Sudah punya akun?{" "}
                        <span>
                            <Link href="/signin">Masuk disini</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
