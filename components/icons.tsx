export type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  send2: ({ fill, ...props }: IconProps) => (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.93094 6.32015L16.4209 3.49015C20.2309 2.22015 22.3009 4.30015 21.0409 8.11015L18.2109 16.6002C16.3109 22.3102 13.1909 22.3102 11.2909 16.6002L10.4509 14.0802L7.93094 13.2402C2.22094 11.3402 2.22094 8.23015 7.93094 6.32015Z"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6406 13.6505L14.2206 10.0605"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  unlock: ({ fill, ...props }: IconProps) => (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.1676 29.335H9.83427C4.50094 29.335 3.1676 28.0016 3.1676 22.6683V20.0016C3.1676 14.6683 4.50094 13.335 9.83427 13.335H23.1676C28.5009 13.335 29.8343 14.6683 29.8343 20.0016V22.6683C29.8343 28.0016 28.5009 29.335 23.1676 29.335Z"
        stroke="#292D32"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.5 13.3317V10.665C8.5 6.25171 9.83333 2.66504 16.5 2.66504C22.5 2.66504 24.5 5.33171 24.5 9.33171"
        stroke="#292D32"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5009 24.6667C18.3419 24.6667 19.8343 23.1743 19.8343 21.3333C19.8343 19.4924 18.3419 18 16.5009 18C14.66 18 13.1676 19.4924 13.1676 21.3333C13.1676 23.1743 14.66 24.6667 16.5009 24.6667Z"
        stroke="#292D32"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  receiptItem: ({ fill, ...props }: IconProps) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 4.5V6.315C16.5 7.5 15.75 8.25 14.565 8.25H12V3.0075C12 2.175 12.6825 1.5 13.515 1.5C14.3325 1.5075 15.0825 1.8375 15.6225 2.3775C16.1625 2.925 16.5 3.675 16.5 4.5Z"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.5 5.25V15.75C1.5 16.3725 2.205 16.725 2.7 16.35L3.9825 15.39C4.2825 15.165 4.7025 15.195 4.9725 15.465L6.2175 16.7175C6.51 17.01 6.99 17.01 7.2825 16.7175L8.5425 15.4575C8.805 15.195 9.225 15.165 9.5175 15.39L10.8 16.35C11.295 16.7175 12 16.365 12 15.75V3C12 2.175 12.675 1.5 13.5 1.5H5.25H4.5C2.25 1.5 1.5 2.8425 1.5 4.5V5.25Z"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.75 9.75781H9"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.75 6.75781H9"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.4967 9.75H4.50344"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.4967 6.75H4.50344"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  menuBord: ({ fill, ...props }: IconProps) => (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.4475 5.56976L13.92 15.7173C13.74 16.4748 13.065 16.9998 12.285 16.9998H2.42998C1.29748 16.9998 0.487487 15.8897 0.824987 14.8022L3.98248 4.66229C4.19998 3.95729 4.85249 3.46973 5.58749 3.46973H14.8125C15.525 3.46973 16.1175 3.90473 16.365 4.50473C16.5075 4.82723 16.5375 5.19476 16.4475 5.56976Z"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M12 17H15.585C16.5525 17 17.31 16.1825 17.2425 15.215L16.5 5"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.26001 5.28488L8.04002 2.04492"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.285 5.29208L12.99 2.03711"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.77502 9.5H11.775"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.02502 12.5H11.025"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  edit2: ({ fill, ...props }: IconProps) => (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.05 3.50002L4.20829 10.7417C3.94996 11.0167 3.69996 11.5584 3.64996 11.9334L3.34162 14.6334C3.23329 15.6084 3.93329 16.275 4.89996 16.1084L7.58329 15.65C7.95829 15.5834 8.48329 15.3084 8.74162 15.025L15.5833 7.78335C16.7666 6.53335 17.3 5.10835 15.4583 3.36668C13.625 1.64168 12.2333 2.25002 11.05 3.50002Z"
        stroke="#0155AD"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.9082 4.70825C10.2665 7.00825 12.1332 8.76659 14.4499 8.99992"
        stroke="#0155AD"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5 18.8333H17.5"
        stroke="#0155AD"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  moneySend: ({ fill, ...props }: IconProps) => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.70825 12.6041C8.70825 13.4933 9.39576 14.2083 10.2391 14.2083H11.9624C12.6957 14.2083 13.2916 13.585 13.2916 12.8058C13.2916 11.9716 12.9249 11.6691 12.3841 11.4766L9.62492 10.5141C9.08409 10.3216 8.71743 10.0283 8.71743 9.18497C8.71743 8.41497 9.31324 7.78247 10.0466 7.78247H11.7699C12.6132 7.78247 13.3008 8.49747 13.3008 9.38664"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 6.875V15.125"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.1666 11C20.1666 16.06 16.0599 20.1667 10.9999 20.1667C5.93992 20.1667 1.83325 16.06 1.83325 11C1.83325 5.94004 5.93992 1.83337 10.9999 1.83337"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.1667 5.50004V1.83337H16.5"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5833 6.41671L20.1666 1.83337"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  login: ({ fill, ...props }: IconProps) => (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.41663 6.79995C7.67496 3.79995 9.21663 2.57495 12.5916 2.57495H12.7C16.425 2.57495 17.9166 4.06662 17.9166 7.79162V13.225C17.9166 16.95 16.425 18.4416 12.7 18.4416H12.5916C9.24163 18.4416 7.69996 17.2333 7.42496 14.2833"
        stroke="#DF1620"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.66663 10.5H12.4"
        stroke="#DF1620"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5416 7.70825L13.3333 10.4999L10.5416 13.2916"
        stroke="#DF1620"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  trash: ({ fill, ...props }: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 4.98356C14.725 4.70856 11.9333 4.56689 9.15 4.56689C7.5 4.56689 5.85 4.65023 4.2 4.81689L2.5 4.98356"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.08325 4.1415L7.26659 3.04984C7.39992 2.25817 7.49992 1.6665 8.90825 1.6665H11.0916C12.4999 1.6665 12.6083 2.2915 12.7333 3.05817L12.9166 4.1415"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7084 7.6167L15.1667 16.0084C15.0751 17.3167 15.0001 18.3334 12.6751 18.3334H7.32508C5.00008 18.3334 4.92508 17.3167 4.83341 16.0084L4.29175 7.6167"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.6084 13.75H11.3834"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.91675 10.4165H12.0834"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  star: ({ fill, ...props }: IconProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.15327 2.34025L10.3266 4.68692C10.4866 5.01359 10.9133 5.32692 11.2733 5.38692L13.3999 5.74025C14.7599 5.96692 15.0799 6.95359 14.0999 7.92692L12.4466 9.58025C12.1666 9.86025 12.0133 10.4003 12.0999 10.7869L12.5733 12.8336C12.9466 14.4536 12.0866 15.0803 10.6533 14.2336L8.65994 13.0536C8.29994 12.8403 7.70661 12.8403 7.33994 13.0536L5.34661 14.2336C3.91994 15.0803 3.05327 14.4469 3.42661 12.8336L3.89994 10.7869C3.98661 10.4003 3.83327 9.86025 3.55327 9.58025L1.89994 7.92692C0.926606 6.95359 1.23994 5.96692 2.59994 5.74025L4.72661 5.38692C5.07994 5.32692 5.50661 5.01359 5.66661 4.68692L6.83994 2.34025C7.47994 1.06692 8.51994 1.06692 9.15327 2.34025Z"
        fill="#FFA500"
      />
    </svg>
  ),

  searchNormal: ({ fill, ...props }: IconProps) => (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.58333 17.9998C13.9556 17.9998 17.5 14.4554 17.5 10.0832C17.5 5.71092 13.9556 2.1665 9.58333 2.1665C5.21108 2.1665 1.66667 5.71092 1.66667 10.0832C1.66667 14.4554 5.21108 17.9998 9.58333 17.9998Z"
        stroke="inherit"
        stroke-opacity="0.41"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3333 18.8332L16.6667 17.1665"
        stroke="inherit"
        stroke-opacity="0.41"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  profile2user: ({ fill, ...props }: IconProps) => (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.10664 7.74668C6.03998 7.74001 5.95998 7.74001 5.88664 7.74668C4.29998 7.69334 3.03998 6.39334 3.03998 4.79334C3.03998 3.16001 4.35998 1.83334 5.99998 1.83334C7.63331 1.83334 8.95998 3.16001 8.95998 4.79334C8.95331 6.39334 7.69331 7.69334 6.10664 7.74668Z"
        stroke="#434242"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.94 3.16666C12.2333 3.16666 13.2733 4.21332 13.2733 5.49999C13.2733 6.75999 12.2733 7.78666 11.0267 7.83332C10.9733 7.82666 10.9133 7.82666 10.8533 7.83332"
        stroke="#434242"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.77335 10.2067C1.16002 11.2867 1.16002 13.0467 2.77335 14.12C4.60669 15.3467 7.61335 15.3467 9.44669 14.12C11.06 13.04 11.06 11.28 9.44669 10.2067C7.62002 8.98666 4.61335 8.98666 2.77335 10.2067Z"
        stroke="#434242"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.2267 13.8333C12.7067 13.7333 13.16 13.54 13.5334 13.2533C14.5734 12.4733 14.5734 11.1867 13.5334 10.4067C13.1667 10.1267 12.72 9.94001 12.2467 9.83334"
        stroke="#434242"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  profile: ({ fill, ...props }: IconProps) => (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.12004 8.6525C9.04504 8.645 8.95504 8.645 8.87254 8.6525C7.08754 8.5925 5.67004 7.13 5.67004 5.33C5.67004 3.4925 7.15504 2 9.00004 2C10.8375 2 12.33 3.4925 12.33 5.33C12.3225 7.13 10.905 8.5925 9.12004 8.6525Z"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.37004 11.42C3.55504 12.635 3.55504 14.615 5.37004 15.8225C7.43254 17.2025 10.815 17.2025 12.8775 15.8225C14.6925 14.6075 14.6925 12.6275 12.8775 11.42C10.8225 10.0475 7.44004 10.0475 5.37004 11.42Z"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  spinner: ({ fill, ...props }: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
      {...props}
    >
      <path
        d="M11.875 1.875C11.875 1.37772 11.6775 0.900805 11.3258 0.549175C10.9742 0.197544 10.4973 0 10 0C9.50272 0 9.02581 0.197544 8.67417 0.549175C8.32254 0.900805 8.125 1.37772 8.125 1.875C8.125 2.37228 8.32254 2.84919 8.67417 3.20083C9.02581 3.55246 9.50272 3.75 10 3.75C10.4973 3.75 10.9742 3.55246 11.3258 3.20083C11.6775 2.84919 11.875 2.37228 11.875 1.875ZM11.875 18.125C11.875 17.6277 11.6775 17.1508 11.3258 16.7992C10.9742 16.4475 10.4973 16.25 10 16.25C9.50272 16.25 9.02581 16.4475 8.67417 16.7992C8.32254 17.1508 8.125 17.6277 8.125 18.125C8.125 18.6223 8.32254 19.0992 8.67417 19.4508C9.02581 19.8025 9.50272 20 10 20C10.4973 20 10.9742 19.8025 11.3258 19.4508C11.6775 19.0992 11.875 18.6223 11.875 18.125ZM1.875 11.875C2.37228 11.875 2.84919 11.6775 3.20083 11.3258C3.55246 10.9742 3.75 10.4973 3.75 10C3.75 9.50272 3.55246 9.02581 3.20083 8.67417C2.84919 8.32254 2.37228 8.125 1.875 8.125C1.37772 8.125 0.900805 8.32254 0.549175 8.67417C0.197544 9.02581 0 9.50272 0 10C0 10.4973 0.197544 10.9742 0.549175 11.3258C0.900805 11.6775 1.37772 11.875 1.875 11.875ZM20 10C20 9.50272 19.8025 9.02581 19.4508 8.67417C19.0992 8.32254 18.6223 8.125 18.125 8.125C17.6277 8.125 17.1508 8.32254 16.7992 8.67417C16.4475 9.02581 16.25 9.50272 16.25 10C16.25 10.4973 16.4475 10.9742 16.7992 11.3258C17.1508 11.6775 17.6277 11.875 18.125 11.875C18.6223 11.875 19.0992 11.6775 19.4508 11.3258C19.8025 10.9742 20 10.4973 20 10ZM5.58203 17.0703C5.75619 16.8962 5.89433 16.6894 5.98859 16.4619C6.08284 16.2343 6.13135 15.9904 6.13135 15.7441C6.13135 15.4978 6.08284 15.254 5.98859 15.0264C5.89433 14.7989 5.75619 14.5921 5.58203 14.418C5.40788 14.2438 5.20112 14.1057 4.97358 14.0114C4.74603 13.9172 4.50215 13.8687 4.25586 13.8687C3.75845 13.8687 3.28141 14.0662 2.92969 14.418C2.57796 14.7697 2.38037 15.2467 2.38037 15.7441C2.38037 16.2416 2.57796 16.7186 2.92969 17.0703C3.28141 17.422 3.75845 17.6196 4.25586 17.6196C4.75327 17.6196 5.23031 17.422 5.58203 17.0703ZM5.58203 5.57812C5.76484 5.406 5.91121 5.1989 6.01247 4.96913C6.11372 4.73936 6.1678 4.4916 6.17148 4.24053C6.17516 3.98947 6.12838 3.74022 6.03391 3.50758C5.93944 3.27494 5.79921 3.06364 5.62153 2.88622C5.44385 2.7088 5.23235 2.56888 4.99957 2.47475C4.76678 2.38063 4.51747 2.33421 4.26641 2.33827C4.01535 2.34232 3.76766 2.39676 3.53804 2.49835C3.30842 2.59995 3.10155 2.74663 2.92969 2.92969C2.57796 3.28141 2.38037 3.75845 2.38037 4.25586C2.38037 4.75327 2.57796 5.23031 2.92969 5.58203C3.28141 5.93375 3.75845 6.13135 4.25586 6.13135C4.75327 6.13135 5.23031 5.93375 5.58203 5.58203V5.57812ZM14.418 17.0703C14.5921 17.2445 14.7989 17.3826 15.0264 17.4769C15.254 17.5711 15.4978 17.6196 15.7441 17.6196C15.9904 17.6196 16.2343 17.5711 16.4619 17.4769C16.6894 17.3826 16.8962 17.2445 17.0703 17.0703C17.2445 16.8962 17.3826 16.6894 17.4769 16.4619C17.5711 16.2343 17.6196 15.9904 17.6196 15.7441C17.6196 15.4978 17.5711 15.254 17.4769 15.0264C17.3826 14.7989 17.2445 14.5921 17.0703 14.418C16.8962 14.2438 16.6894 14.1057 16.4619 14.0114C16.2343 13.9172 15.9904 13.8687 15.7441 13.8687C15.4978 13.8687 15.254 13.9172 15.0264 14.0114C14.7989 14.1057 14.5921 14.2438 14.418 14.418C14.2438 14.5921 14.1057 14.7989 14.0114 15.0264C13.9172 15.254 13.8687 15.4978 13.8687 15.7441C13.8687 15.9904 13.9172 16.2343 14.0114 16.4619C14.1057 16.6894 14.2438 16.8962 14.418 17.0703Z"
        fill={fill}
      />
    </svg>
  ),

  googleSVG: ({ fill, ...props }: IconProps) => (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.8368 10.0415H21.0312V10H12.0312V14H17.6828C16.8583 16.3285 14.6427 18 12.0312 18C8.71775 18 6.03125 15.3135 6.03125 12C6.03125 8.6865 8.71775 6 12.0312 6C13.5608 6 14.9523 6.577 16.0118 7.5195L18.8403 4.691C17.0542 3.0265 14.6652 2 12.0312 2C6.50875 2 2.03125 6.4775 2.03125 12C2.03125 17.5225 6.50875 22 12.0312 22C17.5538 22 22.0312 17.5225 22.0312 12C22.0312 11.3295 21.9622 10.675 21.8368 10.0415Z"
        fill="#FFC107"
      />
      <path
        d="M3.18359 7.3455L6.46909 9.755C7.35809 7.554 9.51109 6 12.0306 6C13.5601 6 14.9516 6.577 16.0111 7.5195L18.8396 4.691C17.0536 3.0265 14.6646 2 12.0306 2C8.18959 2 4.85859 4.1685 3.18359 7.3455Z"
        fill="#FF3D00"
      />
      <path
        d="M12.0314 22.0003C14.6144 22.0003 16.9614 21.0118 18.7359 19.4043L15.6409 16.7853C14.6032 17.5745 13.3351 18.0014 12.0314 18.0003C9.43041 18.0003 7.22191 16.3418 6.38991 14.0273L3.12891 16.5398C4.78391 19.7783 8.14491 22.0003 12.0314 22.0003Z"
        fill="#4CAF50"
      />
      <path
        d="M21.8368 10.0415H21.0312V10H12.0312V14H17.6828C17.2884 15.1082 16.5779 16.0766 15.6392 16.7855L15.6407 16.7845L18.7358 19.4035C18.5168 19.6025 22.0312 17 22.0312 12C22.0312 11.3295 21.9622 10.675 21.8368 10.0415Z"
        fill="#1976D2"
      />
    </svg>
  ),

  ArrowLeft: ({ fill, ...props }: IconProps) => (
    <svg
      {...props}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1012 5.93005L4.03125 12.0001L10.1012 18.0701"
        stroke="#434242"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.0331 12H4.20312"
        stroke="#434242"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  Bell: ({ fill, ...props }: IconProps) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0201 2.91016C8.71009 2.91016 6.02009 5.60016 6.02009 8.91016V11.8002C6.02009 12.4102 5.76009 13.3402 5.45009 13.8602L4.30009 15.7702C3.59009 16.9502 4.08009 18.2602 5.38009 18.7002C9.69009 20.1402 14.3401 20.1402 18.6501 18.7002C19.8601 18.3002 20.3901 16.8702 19.7301 15.7702L18.5801 13.8602C18.2801 13.3402 18.0201 12.4102 18.0201 11.8002V8.91016C18.0201 5.61016 15.3201 2.91016 12.0201 2.91016Z"
        stroke="#001224"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M13.8699 3.19945C13.5599 3.10945 13.2399 3.03945 12.9099 2.99945C11.9499 2.87945 11.0299 2.94945 10.1699 3.19945C10.4599 2.45945 11.1799 1.93945 12.0199 1.93945C12.8599 1.93945 13.5799 2.45945 13.8699 3.19945Z"
        stroke="#001224"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.02 19.0605C15.02 20.7105 13.67 22.0605 12.02 22.0605C11.2 22.0605 10.44 21.7205 9.90002 21.1805C9.36002 20.6405 9.02002 19.8805 9.02002 19.0605"
        stroke="#001224"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  ),

  location: ({ fill, ...props }: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.9999 11.1922C11.4358 11.1922 12.5999 10.0281 12.5999 8.59219C12.5999 7.15625 11.4358 5.99219 9.9999 5.99219C8.56396 5.99219 7.3999 7.15625 7.3999 8.59219C7.3999 10.0281 8.56396 11.1922 9.9999 11.1922Z"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <path
        d="M3.01675 7.07435C4.65842 -0.142316 15.3501 -0.133982 16.9834 7.08268C17.9417 11.316 15.3084 14.8994 13.0001 17.116C11.3251 18.7327 8.67508 18.7327 6.99175 17.116C4.69175 14.8994 2.05842 11.3077 3.01675 7.07435Z"
        stroke="inherit"
        strokeWidth="1.5"
      />
    </svg>
  ),

  message3: ({ fill, ...props }: IconProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.3333 8.33335V15.1333C29.3333 16.8267 28.7733 18.2533 27.7733 19.24C26.7866 20.24 25.36 20.8 23.6666 20.8V23.2133C23.6666 24.12 22.6533 24.6667 21.9066 24.16L20.6133 23.3067C20.7333 22.8933 20.7866 22.44 20.7866 21.96V16.5334C20.7866 13.8134 18.9733 12 16.2533 12H7.19995C7.01328 12 6.83996 12.0134 6.66663 12.0267V8.33335C6.66663 4.93335 8.93329 2.66669 12.3333 2.66669H23.6666C27.0666 2.66669 29.3333 4.93335 29.3333 8.33335Z"
        stroke="inherit"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.7866 16.5334V21.96C20.7866 22.44 20.7333 22.8933 20.6133 23.3066C20.12 25.2666 18.4933 26.4933 16.2533 26.4933H12.6266L8.59996 29.1733C7.99996 29.5867 7.19995 29.1467 7.19995 28.4267V26.4933C5.83995 26.4933 4.70663 26.04 3.91996 25.2533C3.11996 24.4533 2.66663 23.32 2.66663 21.96V16.5334C2.66663 14 4.23996 12.2534 6.66663 12.0267C6.83996 12.0134 7.01328 12 7.19995 12H16.2533C18.9733 12 20.7866 13.8134 20.7866 16.5334Z"
        stroke="inherit"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  moneyRecive: ({ fill, ...props }: IconProps) => (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.9165 11.9583C7.9165 12.7666 8.54152 13.4166 9.30818 13.4166H10.8748C11.5415 13.4166 12.0832 12.8499 12.0832 12.1416C12.0832 11.3833 11.7498 11.1083 11.2582 10.9333L8.74984 10.0583C8.25817 9.88328 7.92485 9.61662 7.92485 8.84995C7.92485 8.14995 8.4665 7.57495 9.13316 7.57495H10.6998C11.4665 7.57495 12.0915 8.22495 12.0915 9.03328"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 6.75V14.25"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3332 10.5C18.3332 15.1 14.5998 18.8333 9.99984 18.8333C5.39984 18.8333 1.6665 15.1 1.6665 10.5C1.6665 5.89996 5.39984 2.16663 9.99984 2.16663"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.1665 3V6.33333H17.4998"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3332 2.16663L14.1665 6.33329"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  directBox: ({ fill, ...props }: IconProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.33333 16C4 16 4 18.3867 4 21.3333V22.6667C4 26.3467 4 29.3333 10.6667 29.3333H21.3333C26.6667 29.3333 28 26.3467 28 22.6667V21.3333C28 18.3867 28 16 22.6667 16C21.3333 16 20.96 16.28 20.2667 16.8L18.9067 18.24C17.3333 19.92 14.6667 19.92 13.08 18.24L11.7333 16.8C11.04 16.28 10.6667 16 9.33333 16Z"
        stroke="inherit"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3334 15.9993V7.99935C25.3334 5.05268 25.3334 2.66602 20.0001 2.66602H12.0001C6.66675 2.66602 6.66675 5.05268 6.66675 7.99935V15.9993"
        stroke="inherit"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  arrowUp: ({ fill, ...props }: IconProps) => (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.2802 10.5334L8.93355 6.18676C8.42021 5.67342 7.58021 5.67342 7.06688 6.18676L2.72021 10.5334"
        stroke="inherit"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  arrowLeft: ({ fill, ...props }: IconProps) => (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 16.5999L7.0667 11.1666C6.42503 10.5249 6.42503 9.4749 7.0667 8.83324L12.5 3.3999"
        stroke="#001224"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  home2: ({ fill, ...props }: IconProps) => (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5165 2.86713L3.02484 6.36713C2.27484 6.95046 1.6665 8.19213 1.6665 9.13379V15.3088C1.6665 17.2421 3.2415 18.8255 5.17484 18.8255H14.8248C16.7582 18.8255 18.3332 17.2421 18.3332 15.3171V9.25046C18.3332 8.24213 17.6582 6.95046 16.8332 6.37546L11.6832 2.76713C10.5165 1.95046 8.6415 1.99213 7.5165 2.86713Z"
        stroke="inherit"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 15.4912V12.9912"
        stroke="inherit"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  Adjustment: ({ fill, ...props }: IconProps) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.25 13.5C2.25 13.0858 2.58579 12.75 3 12.75H9.87803C10.1869 11.8761 11.0203 11.25 12 11.25C12.9797 11.25 13.8131 11.8761 14.122 12.75H15C15.4142 12.75 15.75 13.0858 15.75 13.5C15.75 13.9142 15.4142 14.25 15 14.25H14.122C13.8131 15.1239 12.9797 15.75 12 15.75C11.0203 15.75 10.1869 15.1239 9.87803 14.25H3C2.58579 14.25 2.25 13.9142 2.25 13.5ZM2.25 9C2.25 8.58579 2.58579 8.25 3 8.25H3.87803C4.18691 7.37611 5.02034 6.75 6 6.75C6.97966 6.75 7.81309 7.37611 8.12197 8.25H15C15.4142 8.25 15.75 8.58579 15.75 9C15.75 9.41421 15.4142 9.75 15 9.75H8.12197C7.81309 10.6239 6.97966 11.25 6 11.25C5.02034 11.25 4.18691 10.6239 3.87803 9.75H3C2.58579 9.75 2.25 9.41421 2.25 9ZM2.25 4.5C2.25 4.08579 2.58579 3.75 3 3.75H9.87803C10.1869 2.87611 11.0203 2.25 12 2.25C12.9797 2.25 13.8131 2.87611 14.122 3.75H15C15.4142 3.75 15.75 4.08579 15.75 4.5C15.75 4.91421 15.4142 5.25 15 5.25H14.122C13.8131 6.12389 12.9797 6.75 12 6.75C11.0203 6.75 10.1869 6.12389 9.87803 5.25H3C2.58579 5.25 2.25 4.91421 2.25 4.5ZM5.25 9C5.25 9.41421 5.58579 9.75 6 9.75C6.41421 9.75 6.75 9.41421 6.75 9C6.75 8.58579 6.41421 8.25 6 8.25C5.58579 8.25 5.25 8.58579 5.25 9ZM11.25 13.5C11.25 13.9142 11.5858 14.25 12 14.25C12.4142 14.25 12.75 13.9142 12.75 13.5C12.75 13.0858 12.4142 12.75 12 12.75C11.5858 12.75 11.25 13.0858 11.25 13.5ZM11.25 4.5C11.25 4.91421 11.5858 5.25 12 5.25C12.4142 5.25 12.75 4.91421 12.75 4.5C12.75 4.08579 12.4142 3.75 12 3.75C11.5858 3.75 11.25 4.08579 11.25 4.5Z"
        fill="#001224"
      />
    </svg>
  ),

  creativeCommons: ({ fill, ...props }: IconProps) => (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 17C4.86 17 1.5 13.64 1.5 9.5C1.5 5.36 4.86 2 9 2C13.14 2 16.5 5.36 16.5 9.5C16.5 13.64 13.14 17 9 17Z"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.15997 11.1127C7.77747 11.4427 7.28246 11.6526 6.74246 11.6526C5.55746 11.6526 4.58997 10.6927 4.58997 9.50015C4.58997 8.30765 5.54996 7.34766 6.74246 7.34766C7.28996 7.34766 7.78497 7.55013 8.15997 7.88763"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.41 11.1127C13.0275 11.4427 12.5325 11.6526 11.9925 11.6526C10.8075 11.6526 9.83997 10.6927 9.83997 9.50015C9.83997 8.30765 10.8 7.34766 11.9925 7.34766C12.54 7.34766 13.035 7.55013 13.41 7.88763"
        stroke="#434242"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  calendar: ({ fill, ...props }: IconProps) => (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.6665 2.16699V4.66699"
        stroke="inherit"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3335 2.16699V4.66699"
        stroke="inherit"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.9165 8.0752H17.0832"
        stroke="inherit"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 7.58366V14.667C17.5 17.167 16.25 18.8337 13.3333 18.8337H6.66667C3.75 18.8337 2.5 17.167 2.5 14.667V7.58366C2.5 5.08366 3.75 3.41699 6.66667 3.41699H13.3333C16.25 3.41699 17.5 5.08366 17.5 7.58366Z"
        stroke="inherit"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0791 11.9167H13.0866"
        stroke="inherit"
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0791 14.4167H13.0866"
        stroke="inherit"
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99607 11.9167H10.0036"
        stroke="inherit"
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99607 14.4167H10.0036"
        stroke="inherit"
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.91209 11.9167H6.91957"
        stroke="inherit"
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.91209 14.4167H6.91957"
        stroke="inherit"
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};
