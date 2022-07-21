
import { Route, Routes, Navigate } from "react-router-dom"
import { LoginPage } from "./Login/LoginPage"
import { AtentionPage } from "./MedicoUserView/AtentionPage"
import { PatientPage } from "./MedicoUserView/PatientDir/PatientPage"
import { ReportPage } from "./MedicoUserView/ReportPage"
import { NotFound } from "./Not Found Page/NotFound"
import { SidMenu } from "./Sidemenu/SidMenu"


export const MainApp = () => {


    return (
        <>
            <SidMenu />

            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/mantenimiento_paciente' element={<PatientPage />} />
                <Route path='/reporte' element={<ReportPage />} />
                <Route path='/atenciones' element={<AtentionPage />} />
                <Route path='/error' element={<NotFound />} />
                <Route path='/*' element={<Navigate to="error" />} />

            </Routes>
        </>
    )
}
