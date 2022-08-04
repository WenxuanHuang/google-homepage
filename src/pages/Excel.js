import React, { useState } from 'react'
import * as XLSX from "xlsx"


export const Excel = () => {

    const [fileName, setFileName] = useState(null)

    const handleFile = async (e) => {
        const file = e.target.files[0]

        setFileName(file.name)

        const data = await file.arrayBuffer()
        /* data is an ArrayBuffer */
        const workbook = XLSX.read(data)

        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json(worksheet)

        console.log(jsonData)
    }

    return (
        <div>
            <h1>Excel Test Page</h1>
            {fileName && (
                <p>
                    Name of the uploaded spreadsheet: <span>{fileName}</span>
                </p>
            )}
            <input type="file" onChange={(e) => handleFile(e)} />
        </div>
    )
}

export default Excel