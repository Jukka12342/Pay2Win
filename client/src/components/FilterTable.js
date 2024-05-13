import React from "react";
import { useState } from "react";
import "../styles/Table.css";

const FilterTable = () => {
    const [text, setText] = useState("");
    console.log(text);
    const products = [
        {
            name: "Текст",
            description:
                "Текстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекст",
            seller: "Текст",
            cost: "000",
        },
        {
            name: "Текст",
            description:
                "Текстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекст",
            seller: "Текст",
            cost: "000",
        },
        {
            name: "Текст",
            description:
                "Текстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекст",
            seller: "Текст",
            cost: "000",
        },
        {
            name: "Текст",
            description:
                "Текстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекст",
            seller: "Текст",
            cost: "000",
        },
        {
            name: "Текст",
            description:
                "Текстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекстекст",
            seller: "Текст",
            cost: "000",
        },
    ];

    const [select, setSelect] = useState("Все");
    const filteredProducts = products
        .filter((p) => (select === "Все" ? true : p.name === select))
        .filter((product) =>
            product.description.toLowerCase().includes(text.toLowerCase())
        );

    return (
        <div className="table-interactions">
            <div className="table-interactions-two">
                <div>
                    <label htmlFor="">Поиск</label>
                    <input
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        placeholder="Пиши сюды"
                        class="table-search"
                    />
                </div>
                <div>
                    <label htmlFor="">Категория</label>
                    <select
                        onChange={(e) => setSelect(e.target.value)}
                        class="table-category"
                    >
                        <option select defaultValue>
                            Все
                        </option>
                        <option>Клан</option>
                        <option>Орда</option>
                    </select>
                </div>
            </div>
            <div class="table-table">
                <table class="table-table-header">
                    <thead>
                        <tr>
                            <th>Клан</th>
                            <th>Описание</th>
                            <th>Продавец</th>
                            <th>Стоимость</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.seller}</td>
                                <td>{product.cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FilterTable;
