import { useForm } from "react-hook-form";

export default function Card() {
  const { register, handleSubmit, watch } = useForm({
    mode: "onChange",
    defaultValues: {
      aspek_penilaian_1: {
        mahasiswa_1: "",
        mahasiswa_2: "",
        mahasiswa_3: "",
        mahasiswa_4: "",
        mahasiswa_5: "",
        mahasiswa_6: "",
        mahasiswa_7: "",
        mahasiswa_8: "",
        mahasiswa_9: "",
        mahasiswa_10: "",
      },
      aspek_penilaian_2: {
        mahasiswa_1: "",
        mahasiswa_2: "",
        mahasiswa_3: "",
        mahasiswa_4: "",
        mahasiswa_5: "",
        mahasiswa_6: "",
        mahasiswa_7: "",
        mahasiswa_8: "",
        mahasiswa_9: "",
        mahasiswa_10: "",
      },
      aspek_penilaian_3: {
        mahasiswa_1: "",
        mahasiswa_2: "",
        mahasiswa_3: "",
        mahasiswa_4: "",
        mahasiswa_5: "",
        mahasiswa_6: "",
        mahasiswa_7: "",
        mahasiswa_8: "",
        mahasiswa_9: "",
        mahasiswa_10: "",
      },
      aspek_penilaian_4: {
        mahasiswa_1: "",
        mahasiswa_2: "",
        mahasiswa_3: "",
        mahasiswa_4: "",
        mahasiswa_5: "",
        mahasiswa_6: "",
        mahasiswa_7: "",
        mahasiswa_8: "",
        mahasiswa_9: "",
        mahasiswa_10: "",
      },
    },
  });
  const onSubmit = (data) => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  console.log(watch("aspek_penilaian_1.mahasiswa_1"));

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "78px",
          marginLeft: "440px",
        }}
      >
        <p>Aspek Penilaian 1</p>
        <p>Aspek Penilaian 2</p>
        <p>Aspek Penilaian 3</p>
        <p>Aspek Penilaian 4</p>
      </div>
      <div
        style={{
          display: "flex",
          direction: "column",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number_of_mahasiswa) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "50px",
              }}
            >
              <p style={{ margin: "0px", width: "200px" }}>
                Mahasiswa {number_of_mahasiswa}
              </p>
              {[1, 2, 3, 4].map((number) => (
                <>
                  <div>
                    <select
                      style={{ width: "150px" }}
                      key={number}
                      {...register(
                        `aspek_penilaian_${number}.mahasiswa_${number_of_mahasiswa}`
                      )}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                        <option key={number} value={number}>
                          {number}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              ))}
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "end" }}>
            <input type="submit" value="Simpan" />
          </div>
        </form>
      </div>
    </>
  );
}
