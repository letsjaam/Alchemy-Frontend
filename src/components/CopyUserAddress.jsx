

import React from 'react'
import Swal from "sweetalert2"
import {GrCopy} from "react-icons/gr"


const CopyUserAddress = () => {

    const copyAddress= ()=>{
		const destinationAddress = "4vMzFrFg1fcu5ySzkCm7gzWT5JvQMahTScwHyU1kPhxU"
		navigator.clipboard.writeText(destinationAddress)
		.then(()=>{
			const Toast = Swal.mixin({
				toast: true,
				position: "top-end",
				timer: 2000,
				timerProgressBar: true,
			})
			Toast.fire({
				text: "Copied Successfully!",
				icon: "success",
				showConfirmButton: false,
			})
		})
		.catch(()=> {
			const Toast = Swal.mixin({
				toast: true,
				position: "top-end",
				timer: 2000,
				timerProgressBar: true,
			})
			Toast.fire({
				text: "Copy Unsuccessful!",
				icon: "error",
				showConfirmButton: false,
			})
		})
	}

  return (
    <div className="text-[2rem] py-3" onClick={copyAddress}><GrCopy /></div>
    )
}

export default CopyUserAddress