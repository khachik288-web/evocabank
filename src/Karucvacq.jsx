import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


function Karucvacq() {
    const { t } = useTranslation();
    return (
        <main>
            <h2>Բանկի կառուցվածքը</h2>
            <img src="https://www.evoca.am/file_manager/structure/final/structure-hy.png" alt="" />
        </main>
    );
}