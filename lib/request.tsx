export async function getApiRespone(sub_url: string){
    try{
        const url = `${process.env.NEXT_PUBLIC_API_URL}/${sub_url}`
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
            }
          };
          const res = await fetch(url, options );
          // Dòng này kiểm tra xem phản hồi có thành công hay không thông qua thuộc tính ok của 
        //   đối tượng res. Nếu thành công (res.ok là true),
        //    nó sẽ chuyển đổi phản hồi thành JSON bằng cách gọi res.json().
        //    Nếu không thành công, nó sẽ từ chối Promise với đối tượng res,
        //    cho phép xử lý lỗi ở nơi khác trong mã.
          const data = res.ok ? res.json():Promise.reject(res);
          return data;
    }
    catch(error){
        console.log(error);
        return Promise.reject(error); 
    }
}