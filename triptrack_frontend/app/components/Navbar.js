import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-5">
      <ul className="container mx-auto flex flex-col md:flex-row justify-between">
        <li className="flex items-center">
          <Link
            href="https://github.com/BryanV475/trip-track"
            className="text-gray-300 hover:text-white align-middle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 inline-block mr-2"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.563 4.935.36.31.682.92.682 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.135 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <Link href="/">
            <p className="text-xl font-bold text-gray-300 hover:text-white align-middle">
              Trip Track - Control de Viáticos
            </p>
          </Link>
        </li>

        <li>
          <ul className="flex my-2 gap-8">
            <li className="bg-gray-700 p-2 rounded-lg">
              <Link href="/">
                <p className="text-md font-bold text-gray-300 hover:text-white py-auto align-middle">
                  Viáticos
                </p>
              </Link>
            </li>
            <li className="bg-gray-700 p-2 rounded-lg">

              <Link href="/approvals">
                <p className="text-md font-bold text-gray-300 hover:text-white py-auto align-middle">
                  Aprobaciones
                </p>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
