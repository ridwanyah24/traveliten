import { useState } from "react"
import { Button } from "../ui/button"

export const FlightItenary = () =>{
    const flights = []
    const [itenary, setItenary] = useState(false)

    return (
        <>
        <div className="bg-[#F0F2F5] rounded-lg min-h-[300px] w-full">
            <div className="flex justify-between w-full p-4">
                <svg width="91" height="28" viewBox="0 0 91 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.375 22.25C21.375 22.5484 21.2565 22.8345 21.0455 23.0455C20.8345 23.2565 20.5484 23.375 20.25 23.375H6.75C6.45163 23.375 6.16548 23.2565 5.95451 23.0455C5.74353 22.8345 5.625 22.5484 5.625 22.25C5.625 21.9516 5.74353 21.6655 5.95451 21.4545C6.16548 21.2435 6.45163 21.125 6.75 21.125H20.25C20.5484 21.125 20.8345 21.2435 21.0455 21.4545C21.2565 21.6655 21.375 21.9516 21.375 22.25ZM23.625 14.75V17C23.625 17.2984 23.5065 17.5845 23.2955 17.7955C23.0845 18.0065 22.7984 18.125 22.5 18.125H5.72531C4.83719 18.1291 3.97174 17.8447 3.25925 17.3144C2.54676 16.7842 2.02576 16.0369 1.77469 15.185L0.455626 10.7891C0.371619 10.5092 0.354183 10.2136 0.40471 9.92578C0.455236 9.63798 0.572327 9.36597 0.74664 9.13146C0.920953 8.89695 1.14766 8.70642 1.40868 8.57509C1.6697 8.44375 1.9578 8.37523 2.25 8.375H3C3.29814 8.37502 3.58407 8.49337 3.795 8.70406L5.71875 10.625H7.15031L6.46875 8.5925C6.37482 8.31048 6.34928 8.01016 6.39426 7.71633C6.43923 7.42249 6.55342 7.14356 6.72741 6.90254C6.90139 6.66152 7.13019 6.46533 7.39493 6.33014C7.65966 6.19494 7.95275 6.12463 8.25 6.125H9C9.29813 6.12502 9.58407 6.24337 9.795 6.45406L13.9688 10.625H19.5C20.5936 10.6262 21.6421 11.0612 22.4154 11.8346C23.1888 12.6079 23.6238 13.6564 23.625 14.75ZM21.375 14.75C21.375 14.2527 21.1775 13.7758 20.8258 13.4242C20.4742 13.0725 19.9973 12.875 19.5 12.875H13.5C13.2019 12.875 12.9159 12.7566 12.705 12.5459L8.89031 8.73031L9.77813 11.3947C9.83442 11.5638 9.84973 11.7439 9.82277 11.9201C9.79582 12.0963 9.72739 12.2636 9.62311 12.4082C9.51882 12.5527 9.38168 12.6704 9.22298 12.7516C9.06428 12.8328 8.88857 12.8751 8.71031 12.875H5.25C5.10222 12.8751 4.95586 12.8461 4.8193 12.7897C4.68273 12.7332 4.55862 12.6504 4.45406 12.5459L2.85 10.94L3.92906 14.5391C4.04352 14.9262 4.28051 15.2657 4.60441 15.5066C4.92832 15.7475 5.32165 15.8768 5.72531 15.875H21.375V14.75Z" fill="#344054"/>
                    <path d="M43 7.436V9.47H37.762V12.692H41.776V14.69H37.762V20H35.242V7.436H43ZM46.5869 6.68V20H44.0669V6.68H46.5869ZM49.6347 8.84C49.1907 8.84 48.8187 8.702 48.5187 8.426C48.2307 8.138 48.0867 7.784 48.0867 7.364C48.0867 6.944 48.2307 6.596 48.5187 6.32C48.8187 6.032 49.1907 5.888 49.6347 5.888C50.0787 5.888 50.4447 6.032 50.7327 6.32C51.0327 6.596 51.1827 6.944 51.1827 7.364C51.1827 7.784 51.0327 8.138 50.7327 8.426C50.4447 8.702 50.0787 8.84 49.6347 8.84ZM50.8767 10.028V20H48.3567V10.028H50.8767ZM56.5525 9.866C57.2965 9.866 57.9505 10.016 58.5145 10.316C59.0785 10.604 59.5225 10.982 59.8465 11.45V10.028H62.3845V20.072C62.3845 20.996 62.1985 21.818 61.8265 22.538C61.4545 23.27 60.8965 23.846 60.1525 24.266C59.4085 24.698 58.5085 24.914 57.4525 24.914C56.0365 24.914 54.8725 24.584 53.9605 23.924C53.0605 23.264 52.5505 22.364 52.4305 21.224H54.9325C55.0645 21.68 55.3465 22.04 55.7785 22.304C56.2225 22.58 56.7565 22.718 57.3805 22.718C58.1125 22.718 58.7065 22.496 59.1625 22.052C59.6185 21.62 59.8465 20.96 59.8465 20.072V18.524C59.5225 18.992 59.0725 19.382 58.4965 19.694C57.9325 20.006 57.2845 20.162 56.5525 20.162C55.7125 20.162 54.9445 19.946 54.2485 19.514C53.5525 19.082 53.0005 18.476 52.5925 17.696C52.1965 16.904 51.9985 15.998 51.9985 14.978C51.9985 13.97 52.1965 13.076 52.5925 12.296C53.0005 11.516 53.5465 10.916 54.2305 10.496C54.9265 10.076 55.7005 9.866 56.5525 9.866ZM59.8465 15.014C59.8465 14.402 59.7265 13.88 59.4865 13.448C59.2465 13.004 58.9225 12.668 58.5145 12.44C58.1065 12.2 57.6685 12.08 57.2005 12.08C56.7325 12.08 56.3005 12.194 55.9045 12.422C55.5085 12.65 55.1845 12.986 54.9325 13.43C54.6925 13.862 54.5725 14.378 54.5725 14.978C54.5725 15.578 54.6925 16.106 54.9325 16.562C55.1845 17.006 55.5085 17.348 55.9045 17.588C56.3125 17.828 56.7445 17.948 57.2005 17.948C57.6685 17.948 58.1065 17.834 58.5145 17.606C58.9225 17.366 59.2465 17.03 59.4865 16.598C59.7265 16.154 59.8465 15.626 59.8465 15.014ZM69.7417 9.884C70.4977 9.884 71.1697 10.052 71.7577 10.388C72.3457 10.712 72.8017 11.198 73.1257 11.846C73.4617 12.482 73.6297 13.25 73.6297 14.15V20H71.1097V14.492C71.1097 13.7 70.9117 13.094 70.5157 12.674C70.1197 12.242 69.5797 12.026 68.8957 12.026C68.1997 12.026 67.6477 12.242 67.2397 12.674C66.8437 13.094 66.6457 13.7 66.6457 14.492V20H64.1257V6.68H66.6457V11.27C66.9697 10.838 67.4017 10.502 67.9417 10.262C68.4817 10.01 69.0817 9.884 69.7417 9.884ZM78.2401 12.098V16.922C78.2401 17.258 78.3181 17.504 78.4741 17.66C78.6421 17.804 78.9181 17.876 79.3021 17.876H80.4721V20H78.8881C76.7641 20 75.7021 18.968 75.7021 16.904V12.098H74.5141V10.028H75.7021V7.562H78.2401V10.028H80.4721V12.098H78.2401ZM85.3806 20.162C84.5646 20.162 83.8326 20.018 83.1846 19.73C82.5366 19.43 82.0206 19.028 81.6366 18.524C81.2646 18.02 81.0606 17.462 81.0246 16.85H83.5626C83.6106 17.234 83.7966 17.552 84.1206 17.804C84.4566 18.056 84.8706 18.182 85.3626 18.182C85.8426 18.182 86.2146 18.086 86.4786 17.894C86.7546 17.702 86.8926 17.456 86.8926 17.156C86.8926 16.832 86.7246 16.592 86.3886 16.436C86.0646 16.268 85.5426 16.088 84.8226 15.896C84.0786 15.716 83.4666 15.53 82.9866 15.338C82.5186 15.146 82.1106 14.852 81.7626 14.456C81.4266 14.06 81.2586 13.526 81.2586 12.854C81.2586 12.302 81.4146 11.798 81.7266 11.342C82.0506 10.886 82.5066 10.526 83.0946 10.262C83.6946 9.998 84.3966 9.866 85.2006 9.866C86.3886 9.866 87.3366 10.166 88.0446 10.766C88.7526 11.354 89.1426 12.152 89.2146 13.16H86.8026C86.7666 12.764 86.5986 12.452 86.2986 12.224C86.0106 11.984 85.6206 11.864 85.1286 11.864C84.6726 11.864 84.3186 11.948 84.0666 12.116C83.8266 12.284 83.7066 12.518 83.7066 12.818C83.7066 13.154 83.8746 13.412 84.2106 13.592C84.5466 13.76 85.0686 13.934 85.7766 14.114C86.4966 14.294 87.0906 14.48 87.5586 14.672C88.0266 14.864 88.4286 15.164 88.7646 15.572C89.1126 15.968 89.2926 16.496 89.3046 17.156C89.3046 17.732 89.1426 18.248 88.8186 18.704C88.5066 19.16 88.0506 19.52 87.4506 19.784C86.8626 20.036 86.1726 20.162 85.3806 20.162Z" fill="#1D2433"/>
                </svg>
               {flights.length > 0 && <Button variant={"secondary"} className="w-[153px] text-[#0D6EFD] font-semibold">Add Flight</Button>} 
            </div>
            {flights.length === 0 ? 
            (
                <div className=" flex items-center justify-center">
                    <span className="flex flex-col gap-5 text-center mt-10">
                        <p>No Request Yet </p>
                        <Button variant={"default"} className="w-[153px] text-white font-semibold">Add Flight</Button>
                    </span>
                </div>
            ): (
                <p>""</p>
            )}

        </div>
        </>
    )
}