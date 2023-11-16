export default async function getHospitals(){
    
    const response = await fetch("http://localhost:5000/api/v1/hospitals",{next:{tags:['hospitals']}})
    //console.log(response.json())
    // setTimeout(() => {
    //     return response.json()
    // }, 10000);
    return await response.json()
}