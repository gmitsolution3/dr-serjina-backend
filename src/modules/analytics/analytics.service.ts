import Appointment from "../appointment/appointment.model";
import Service from "../treatment-service/treatment-service.model";

export const getDashboardAnalytics = async () => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const [
    totalAppointments,
    upcomingAppointments,
    todaysAppointments,
    totalService,
  ] = await Promise.all([
    Appointment.countDocuments({}),

    Appointment.countDocuments({
      appointmentDate: {
        $gt: new Date(),
      },
    }),

    Appointment.countDocuments({
      appointmentDate: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    }),

    Service.countDocuments({}),
  ]);

  const allAppointments = await Appointment.find({
    appointmentDate: {
      $gte: startOfDay,
      $lte: endOfDay,
    },
  });

  const recentActivities = allAppointments.map((document) => {
    return {
      name: document.name,
      email: document.email,
      phone: document.phone,
      appointmentDate: document.appointmentDate,
    };
  });

  const analyticsData = {
    totalAppointments,
    upcomingAppointments,
    todaysAppointments,
    totalService,
    recentActivities,
  };

  return analyticsData;
};
