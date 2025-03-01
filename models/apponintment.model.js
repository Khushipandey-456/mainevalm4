const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(()=>{

patientId:  {type:number} // Reference to User (patient)
doctorId:{type:number}  // Reference to User (doctor)
appointmentDateTime: {type:DateTime}
symptoms: {type:String}
fees:{ typeNumber} // (updated by doctor after appointment)
prescription:  {type:String} //(updated by doctor after appointment)
isDiagnosisDone: {type:Boolean}// (updated by doctor after appointment)

});
 const AppointmentModel = mongoose.model( "appointmentModel",AppointmentSchema);
 module.exports = AppointmentModel;