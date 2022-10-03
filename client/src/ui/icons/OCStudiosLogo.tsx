interface OCStudiosLogoProps {
    size?: number
}

export const OCStudiosLogo = ({ size = 40 }: OCStudiosLogoProps) => {

    const aspectRatio = 458 / 558

    return (
        <svg width={size} height={size * aspectRatio} viewBox="0 0 558 492" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M243.751 192.1C236.291 199.2 226.201 203.56 215.091 203.56C192.111 203.56 173.481 184.93 173.481 161.95C173.481 138.97 192.111 120.34 215.091 120.34C226.261 120.34 236.401 124.75 243.881 131.92L303.261 69.23C280.311 47.4 249.271 34 215.091 34C144.431 34 87.1509 91.28 87.1509 161.94C87.1509 232.6 144.431 289.88 215.091 289.88C249.201 289.88 280.191 276.53 303.131 254.77L243.751 192.1Z" fill="#DB452C" stroke="white" stroke-width="68" stroke-linejoin="round" />
            <path d="M464.87 35.7607H367.58L264.79 139.711L241.16 163.081L241.42 163.351L241.16 163.611L264.79 186.981L366.48 289.811L464.87 290.321L338.86 163.261L464.87 35.7607Z" fill="black" stroke="white" stroke-width="68" stroke-linejoin="round" />
            <path d="M0 389.86C0 374.78 4.04999 362.97 12.15 354.44C20.25 345.91 30.7 341.64 43.51 341.64C51.9 341.64 59.46 343.65 66.2 347.65C72.94 351.66 78.07 357.25 81.6 364.42C85.13 371.59 86.9 379.72 86.9 388.81C86.9 398.02 85.04 406.27 81.32 413.54C77.6 420.81 72.33 426.32 65.52 430.06C58.7 433.8 51.35 435.67 43.45 435.67C34.9 435.67 27.25 433.6 20.52 429.47C13.78 425.34 8.67999 419.7 5.20999 412.55C1.73999 405.4 0 397.84 0 389.86ZM12.4 390.05C12.4 401 15.34 409.63 21.23 415.93C27.12 422.23 34.5 425.38 43.39 425.38C52.44 425.38 59.89 422.2 65.73 415.83C71.58 409.47 74.5 400.44 74.5 388.74C74.5 381.34 73.25 374.89 70.75 369.37C68.25 363.85 64.59 359.58 59.78 356.54C54.97 353.5 49.56 351.98 43.57 351.98C35.06 351.98 27.73 354.9 21.6 360.75C15.47 366.61 12.4 376.37 12.4 390.05Z" fill="white" />
            <path d="M119.251 434.109L94.2109 368.289H105.991L120.121 407.709C121.651 411.969 123.051 416.389 124.331 420.969C125.321 417.499 126.711 413.329 128.481 408.449L143.111 368.289H154.581L129.661 434.109H119.251Z" fill="white" />
            <path d="M209.501 412.919L221.031 414.349C219.211 421.089 215.841 426.309 210.931 430.029C206.011 433.749 199.731 435.609 192.091 435.609C182.461 435.609 174.831 432.649 169.191 426.719C163.551 420.789 160.731 412.469 160.731 401.769C160.731 390.699 163.581 382.099 169.281 375.989C174.981 369.869 182.381 366.819 191.471 366.819C200.271 366.819 207.461 369.819 213.041 375.809C218.621 381.799 221.411 390.229 221.411 401.099C221.411 401.759 221.391 402.749 221.351 404.069H172.251C172.661 411.299 174.711 416.839 178.391 420.679C182.071 424.519 186.651 426.449 192.151 426.449C196.241 426.449 199.731 425.369 202.631 423.229C205.511 421.059 207.811 417.629 209.501 412.919ZM172.871 394.879H209.631C209.131 389.339 207.731 385.189 205.421 382.419C201.871 378.119 197.261 375.969 191.601 375.969C186.471 375.969 182.171 377.689 178.681 381.119C175.171 384.549 173.241 389.139 172.871 394.879Z" fill="white" />
            <path d="M234.909 434.108V368.288H244.949V378.268C247.509 373.598 249.879 370.518 252.049 369.028C254.219 367.538 256.609 366.798 259.209 366.798C262.969 366.798 266.789 367.998 270.679 370.398L266.839 380.748C264.109 379.138 261.389 378.338 258.659 378.338C256.219 378.338 254.029 379.068 252.089 380.538C250.149 382.008 248.759 384.038 247.939 386.648C246.699 390.618 246.079 394.948 246.079 399.658V434.118H234.909V434.108Z" fill="white" />
            <path d="M320.26 409.998L331.23 411.428C330.03 418.988 326.96 424.908 322.03 429.188C317.09 433.468 311.03 435.598 303.84 435.598C294.83 435.598 287.59 432.658 282.12 426.768C276.64 420.878 273.91 412.438 273.91 401.448C273.91 394.348 275.09 388.118 277.44 382.788C279.8 377.458 283.38 373.458 288.19 370.798C293 368.138 298.24 366.798 303.9 366.798C311.05 366.798 316.89 368.608 321.44 372.228C325.99 375.838 328.9 380.978 330.18 387.628L319.33 389.298C318.3 384.878 316.47 381.548 313.85 379.318C311.23 377.088 308.05 375.968 304.34 375.968C298.72 375.968 294.15 377.978 290.64 382.008C287.13 386.038 285.37 392.418 285.37 401.128C285.37 409.968 287.06 416.398 290.45 420.408C293.84 424.418 298.26 426.428 303.71 426.428C308.09 426.428 311.74 425.078 314.68 422.398C317.61 419.708 319.47 415.578 320.26 409.998Z" fill="white" />
            <path d="M340.533 434.111V343.251H351.693V434.111H340.533Z" fill="white" />
            <path d="M364.823 401.2C364.823 389.01 368.213 379.98 374.993 374.11C380.653 369.23 387.553 366.79 395.693 366.79C404.743 366.79 412.133 369.76 417.883 375.68C423.623 381.61 426.493 389.8 426.493 400.26C426.493 408.73 425.223 415.4 422.683 420.25C420.143 425.11 416.443 428.88 411.593 431.56C406.733 434.25 401.433 435.59 395.693 435.59C386.483 435.59 379.033 432.64 373.353 426.73C367.663 420.83 364.823 412.32 364.823 401.2ZM376.293 401.2C376.293 409.63 378.133 415.94 381.813 420.14C385.493 424.33 390.113 426.43 395.693 426.43C401.233 426.43 405.833 424.32 409.513 420.11C413.193 415.89 415.033 409.47 415.033 400.83C415.033 392.69 413.183 386.52 409.483 382.33C405.783 378.14 401.183 376.04 395.693 376.04C390.113 376.04 385.483 378.13 381.813 382.3C378.133 386.47 376.293 392.77 376.293 401.2Z" fill="white" />
            <path d="M482.53 409.998L493.5 411.428C492.3 418.988 489.23 424.908 484.3 429.188C479.36 433.468 473.3 435.598 466.11 435.598C457.1 435.598 449.86 432.658 444.39 426.768C438.91 420.878 436.18 412.438 436.18 401.448C436.18 394.348 437.36 388.118 439.71 382.788C442.07 377.458 445.65 373.458 450.47 370.798C455.28 368.138 460.52 366.798 466.18 366.798C473.33 366.798 479.17 368.608 483.72 372.228C488.27 375.838 491.18 380.978 492.46 387.628L481.61 389.298C480.58 384.878 478.75 381.548 476.12 379.318C473.5 377.088 470.32 375.968 466.61 375.968C460.99 375.968 456.42 377.978 452.91 382.008C449.4 386.038 447.64 392.418 447.64 401.128C447.64 409.968 449.34 416.398 452.72 420.408C456.11 424.418 460.53 426.428 465.98 426.428C470.36 426.428 474.01 425.078 476.95 422.398C479.88 419.708 481.74 415.578 482.53 409.998Z" fill="white" />
            <path d="M503.111 434.111V343.251H514.271V395.071L540.671 368.301H555.111L529.951 392.721L557.661 434.121H543.901L522.151 400.461L514.281 408.021V434.111H503.111V434.111Z" fill="white" />
            <path d="M163.039 491.359C159.979 491.359 157.309 491.039 155.019 490.389C152.729 489.739 150.809 488.819 149.259 487.619C147.709 486.419 146.509 484.979 145.689 483.279C144.859 481.589 144.379 479.679 144.239 477.559H147.499C147.829 479.599 148.449 481.289 149.359 482.639C150.269 483.989 151.389 485.059 152.729 485.859C154.069 486.659 155.589 487.229 157.299 487.559C159.009 487.889 160.829 488.059 162.759 488.059C164.769 488.059 166.579 487.849 168.189 487.419C169.799 486.989 171.179 486.369 172.319 485.559C173.459 484.749 174.339 483.769 174.939 482.629C175.549 481.489 175.849 480.199 175.849 478.769C175.849 477.259 175.589 475.979 175.069 474.949C174.549 473.909 173.659 473.009 172.419 472.239C171.179 471.469 169.549 470.779 167.519 470.169C165.499 469.569 162.979 468.949 159.979 468.309C157.499 467.759 155.369 467.129 153.599 466.409C151.819 465.699 150.349 464.859 149.199 463.909C148.039 462.959 147.189 461.869 146.639 460.639C146.089 459.419 145.809 457.989 145.809 456.359C145.809 454.599 146.179 452.979 146.929 451.519C147.679 450.059 148.729 448.809 150.089 447.759C151.449 446.709 153.089 445.899 155.009 445.319C156.919 444.739 159.039 444.449 161.349 444.449C163.659 444.449 165.789 444.719 167.709 445.249C169.639 445.789 171.319 446.569 172.769 447.589C174.219 448.609 175.389 449.849 176.279 451.309C177.169 452.769 177.749 454.419 177.989 456.269H174.809C174.509 455.059 174.009 453.929 173.319 452.879C172.629 451.829 171.739 450.929 170.649 450.169C169.559 449.409 168.269 448.819 166.769 448.389C165.269 447.959 163.549 447.749 161.629 447.749C157.579 447.749 154.519 448.499 152.439 449.979C150.359 451.469 149.319 453.509 149.319 456.089C149.319 457.279 149.509 458.309 149.899 459.189C150.279 460.069 150.939 460.859 151.859 461.559C152.779 462.259 153.999 462.879 155.519 463.419C157.039 463.959 158.919 464.459 161.179 464.929C162.499 465.209 163.869 465.499 165.269 465.799C166.669 466.099 168.039 466.459 169.379 466.879C170.719 467.289 171.989 467.799 173.199 468.409C174.409 469.009 175.459 469.759 176.359 470.639C177.249 471.519 177.969 472.579 178.509 473.799C179.049 475.019 179.319 476.479 179.319 478.159C179.319 480.089 178.909 481.859 178.099 483.469C177.289 485.079 176.159 486.469 174.709 487.639C173.259 488.809 171.539 489.719 169.539 490.369C167.549 491.029 165.379 491.359 163.039 491.359Z" fill="white" />
            <path d="M207.579 490.818C207.109 490.868 206.639 490.908 206.179 490.938C205.709 490.968 205.239 490.978 204.779 490.978C203.349 490.978 202.199 490.778 201.329 490.378C200.459 489.978 199.799 489.378 199.349 488.578C198.889 487.778 198.599 486.778 198.459 485.588C198.319 484.388 198.249 482.988 198.249 481.398V461.808H194.159V458.498H198.249V450.108H201.559V458.498H206.809V461.808H201.559V481.678C201.559 483.008 201.659 484.058 201.849 484.838C202.039 485.628 202.329 486.228 202.719 486.658C203.109 487.088 203.579 487.358 204.149 487.488C204.719 487.618 205.349 487.678 206.069 487.678C206.369 487.678 206.629 487.678 206.849 487.678C207.069 487.678 207.319 487.668 207.589 487.638V490.818H207.579Z" fill="white" />
            <path d="M244.508 486.228C243.708 487.198 242.808 487.998 241.798 488.648C240.788 489.298 239.778 489.818 238.738 490.218C237.708 490.618 236.688 490.908 235.678 491.088C234.678 491.268 233.768 491.358 232.968 491.358C226.408 491.358 223.128 487.458 223.128 479.668V458.508H226.438V479.378C226.438 482.378 226.998 484.578 228.108 485.968C229.228 487.358 231.158 488.058 233.908 488.058C235.888 488.058 237.758 487.508 239.508 486.398C241.258 485.298 242.918 483.728 244.488 481.688V458.508H247.798V490.528H244.488V486.228H244.508Z" fill="white" />
            <path d="M287.849 486.109C286.859 487.269 285.889 488.189 284.939 488.879C283.989 489.569 283.069 490.099 282.169 490.469C281.269 490.839 280.409 491.079 279.569 491.189C278.729 491.299 277.919 491.359 277.149 491.359C275.139 491.359 273.359 490.959 271.819 490.159C270.279 489.359 268.979 488.239 267.939 486.789C266.889 485.339 266.099 483.599 265.559 481.559C265.019 479.519 264.749 477.249 264.749 474.739C264.749 472.089 265.069 469.719 265.719 467.609C266.369 465.499 267.259 463.709 268.409 462.239C269.549 460.769 270.899 459.639 272.459 458.849C274.019 458.069 275.689 457.669 277.479 457.669C278.249 457.669 279.039 457.709 279.839 457.789C280.639 457.869 281.469 458.049 282.319 458.309C283.169 458.569 284.059 458.959 284.989 459.489C285.909 460.019 286.869 460.719 287.859 461.599V445.279H291.169V490.529H287.859V486.109H287.849ZM287.849 465.609C286.359 464.069 284.809 462.909 283.199 462.139C281.589 461.369 279.799 460.979 277.849 460.979C276.359 460.979 275.019 461.259 273.819 461.829C272.619 462.389 271.589 463.249 270.739 464.389C269.889 465.529 269.219 466.969 268.759 468.689C268.289 470.409 268.059 472.429 268.059 474.749C268.059 479.099 268.899 482.409 270.579 484.669C272.259 486.929 274.599 488.059 277.599 488.059C279.579 488.059 281.399 487.509 283.049 486.429C284.699 485.339 286.299 483.719 287.839 481.569V465.609H287.849Z" fill="white" />
            <path d="M314 490.529H310.7V458.509H314V490.529ZM314.04 450.449H310.73V445.279H314.04V450.449Z" fill="white" />
            <path d="M345.427 457.679C347.607 457.679 349.577 458.059 351.337 458.819C353.097 459.579 354.597 460.679 355.837 462.129C357.077 463.579 358.027 465.339 358.687 467.419C359.347 469.499 359.677 471.849 359.677 474.469C359.677 477.139 359.337 479.519 358.667 481.619C357.997 483.709 357.037 485.479 355.797 486.929C354.557 488.379 353.057 489.479 351.297 490.229C349.537 490.989 347.577 491.369 345.427 491.369C343.277 491.369 341.327 490.999 339.577 490.249C337.827 489.509 336.337 488.409 335.097 486.969C333.857 485.519 332.887 483.749 332.207 481.659C331.517 479.569 331.167 477.169 331.167 474.469C331.167 471.819 331.507 469.459 332.177 467.379C332.847 465.299 333.807 463.539 335.047 462.109C336.287 460.679 337.787 459.579 339.547 458.829C341.327 458.059 343.277 457.679 345.427 457.679ZM345.427 488.049C347.057 488.049 348.537 487.769 349.867 487.199C351.207 486.639 352.347 485.779 353.317 484.639C354.277 483.499 355.037 482.079 355.567 480.379C356.107 478.689 356.377 476.709 356.377 474.449C356.377 472.219 356.107 470.259 355.567 468.559C355.027 466.869 354.277 465.459 353.317 464.349C352.357 463.229 351.207 462.389 349.867 461.829C348.527 461.259 347.047 460.979 345.427 460.979C343.777 460.979 342.277 461.259 340.947 461.829C339.607 462.389 338.457 463.229 337.497 464.349C336.537 465.469 335.787 466.869 335.267 468.559C334.737 470.259 334.477 472.219 334.477 474.449C334.477 476.709 334.737 478.679 335.267 480.379C335.787 482.079 336.527 483.499 337.497 484.639C338.467 485.779 339.607 486.639 340.947 487.199C342.277 487.769 343.777 488.049 345.427 488.049Z" fill="white" />
            <path d="M387.398 491.358C379.548 491.358 375.268 488.208 374.548 481.898H377.898C378.148 483.828 379.038 485.338 380.558 486.418C382.088 487.508 384.358 488.048 387.358 488.048C388.818 488.048 390.098 487.888 391.198 487.568C392.298 487.248 393.218 486.818 393.948 486.288C394.678 485.748 395.218 485.108 395.578 484.368C395.938 483.618 396.118 482.828 396.118 481.968C396.118 481.118 395.978 480.388 395.688 479.778C395.398 479.168 394.878 478.618 394.118 478.118C393.358 477.618 392.328 477.148 391.018 476.698C389.708 476.238 388.038 475.758 385.998 475.228C384.258 474.788 382.718 474.328 381.368 473.858C380.018 473.388 378.888 472.808 377.958 472.118C377.038 471.428 376.338 470.598 375.868 469.618C375.398 468.638 375.168 467.418 375.168 465.958C375.168 464.698 375.438 463.548 375.978 462.508C376.518 461.478 377.268 460.598 378.228 459.888C379.188 459.178 380.358 458.618 381.738 458.238C383.118 457.848 384.638 457.658 386.328 457.658C390.128 457.658 393.018 458.298 394.988 459.578C396.958 460.858 398.048 462.878 398.278 465.628H394.928C394.708 464.038 393.948 462.858 392.638 462.098C391.328 461.338 389.378 460.958 386.788 460.958C385.578 460.958 384.458 461.068 383.438 461.288C382.418 461.508 381.548 461.828 380.818 462.258C380.088 462.678 379.518 463.218 379.098 463.868C378.688 464.518 378.478 465.248 378.478 466.078C378.478 466.548 378.558 467.028 378.728 467.528C378.898 468.028 379.308 468.528 379.988 469.058C380.658 469.578 381.678 470.108 383.018 470.648C384.368 471.188 386.218 471.748 388.558 472.328C390.398 472.798 392.008 473.288 393.368 473.798C394.738 474.308 395.868 474.918 396.758 475.618C397.658 476.318 398.318 477.138 398.768 478.078C399.208 479.018 399.428 480.118 399.428 481.388C399.428 482.788 399.148 484.108 398.578 485.328C398.018 486.558 397.218 487.608 396.188 488.488C395.148 489.368 393.898 490.068 392.408 490.578C390.918 491.098 389.248 491.358 387.398 491.358Z" fill="white" />
            <path d="M243.751 192.1C236.291 199.2 226.201 203.56 215.091 203.56C192.111 203.56 173.481 184.93 173.481 161.95C173.481 138.97 192.111 120.34 215.091 120.34C226.261 120.34 236.401 124.75 243.881 131.92L303.261 69.23C280.311 47.4 249.271 34 215.091 34C144.431 34 87.1509 91.28 87.1509 161.94C87.1509 232.6 144.431 289.88 215.091 289.88C249.201 289.88 280.191 276.53 303.131 254.77L243.751 192.1Z" fill="#DB452C" />
            <path d="M464.87 35.7607H367.58L264.79 139.711L241.16 163.081L241.42 163.351L241.16 163.611L264.79 186.981L366.48 289.811L464.87 290.321L338.86 163.261L464.87 35.7607Z" fill="black" />
        </svg>
    );
}