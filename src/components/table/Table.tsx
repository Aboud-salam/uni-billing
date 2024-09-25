import "./Table.css";

export const Table = () => {
  return (
    <div className="flex w-5/6 mx-0 flex-col">
      <div className="my-3 flex justify-between text-[14px]">
        <div className="font-bold">
          المواد المسجلة :{" "}
          <span className="text-red-500 font-bold">
            الفصل الثاني : 2023/2024
          </span>
        </div>
        <div className="text-red-500 font-bold pl-6">الملخص المالي</div>
      </div>
      <div className="flex">
        <table className="flex-1 sub-table w-[700px]">
          <thead>
            <tr>
              <th>م</th>
              <th>رمز المادة </th>
              <th>اسم المادة </th>
              <th>عدد الساعات</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="font-auto font-light">1</td>
              <td className="w-[350px] text-right">ENGL3320 اللغويات (3)</td>
              <td></td>
              <td className="font-auto">3</td>
            </tr>
            <tr>
              <td className="font-auto">2</td>
              <td className="w-[350px] text-right">ENGL3321 الترجمة (3)</td>
              <td></td>
              <td className="font-auto">3</td>
            </tr>
            <tr>
              <td className="font-auto">3</td>
              <td className="w-[350px] text-right">
                FRENCH MEDIUM LITER <span>FREN3310</span>
              </td>
              <td></td>
              <td className="font-auto">3</td>
            </tr>
            <tr>
              <td className="font-auto">4</td>
              <td className="w-[350px] text-right">
                {" "}
                TUTORIAL IN FRENCH <span>FREN3310</span>
              </td>
              <td></td>
              <td className="font-auto">3</td>
            </tr>
            <tr>
              <td className="font-auto">5</td>
              <td className="w-[350px] text-right">OPTI3301 ساعات اختيارية</td>
              <td></td>
              <td className="font-auto">5</td>
            </tr>
          </tbody>
        </table>
        <table className="billing-table w-[170px] text-center">
          <tbody>
            <tr>
              <td className="style13">عدد الساعات</td>
              <td>
                <span
                  id="ctl00_ContentPlaceHolder1_LBLcol8"
                  className="font-arial"
                >
                  17
                </span>
              </td>
            </tr>
            <tr>
              <td className="style13">سعر الساعة</td>
              <td>
                <span
                  id="ctl00_ContentPlaceHolder1_LBLcol7"
                  className="font-arial"
                >
                  19
                </span>
              </td>
            </tr>
            <tr>
              <td className="style13">إجمالي الرسوم</td>
              <td>
                <span
                  id="ctl00_ContentPlaceHolder1_LBLcol6"
                  className="font-arial"
                >
                  323
                </span>
              </td>
            </tr>
            <tr>
              <td className="style13">خدمات جامعية</td>
              <td>
                <span
                  id="ctl00_ContentPlaceHolder1_LBLcol11"
                  className="font-arial"
                >
                  0
                </span>
              </td>
            </tr>
            <tr>
              <td className="style13">دفعات مسبقة</td>
              <td>
                <span
                  id="ctl00_ContentPlaceHolder1_LBLcol5"
                  className="font-arial"
                >
                  0
                </span>
              </td>
            </tr>
            <tr>
              <td className="style13">رسوم مستحقة</td>
              <td>
                <span
                  id="ctl00_ContentPlaceHolder1_LBLcol4"
                  className="font-arial"
                >
                  0
                </span>
              </td>
            </tr>
            <tr>
              <td className="style13">مجموع القروض</td>
              <td>
                <span
                  id="ctl00_ContentPlaceHolder1_LBLcol3"
                  className="font-arial"
                >
                  0
                </span>
              </td>
            </tr>
            <tr>
              <td className="style13">مجموع المنح</td>
              <td>
                <span
                  id="ctl00_ContentPlaceHolder1_LBLcol2"
                  className="font-arial"
                >
                  0
                </span>
              </td>
            </tr>
            <tr>
              <td className="style13">الثوابت</td>
              <td>
                <span
                  id="ctl00_ContentPlaceHolder1_LBLcol1"
                  className="font-arial"
                >
                  16
                </span>
              </td>
            </tr>
            <tr>
              <td className="style20">غرامات </td>
              <td className="style18">
                <span
                  id="ctl00_ContentPlaceHolder1_LBLcol12"
                  className="font-arial"
                >
                  0
                </span>
              </td>
            </tr>
            <tr>
              <td className="style20">القسط الأول</td>
              <td className="style18">
                <span
                  id="ctl00_ContentPlaceHolder1_LBLcol9"
                  className="font-arial"
                >
                  187
                </span>
              </td>
            </tr>
            <tr>
              <td className="style20">اجمالي المبلغ</td>
              <td className="style18">
                <span
                  id="ctl00_ContentPlaceHolder1_LBLcol10"
                  className="font-arial"
                >
                  339
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-20">
        <p className="font-bold bank-text mb-10">
          يجب اختيار البنك لتسديد الرسوم :{" "}
        </p>
        <div className="flex gap-1 bank-input">
          <input type="radio" id="pal" defaultChecked />
          <label htmlFor="pal">بنك فلسطين</label>
        </div>
        <div className="flex gap-1 bank-input">
          <input type="radio" id="isl" />
          <label htmlFor="isl">بنك الاسلامي الفلسطيني</label>
        </div>
        <div>
          <button className="border border-black mt-3 px-2">
            طباعة سند بنك
          </button>
        </div>
      </div>
    </div>
  );
};
