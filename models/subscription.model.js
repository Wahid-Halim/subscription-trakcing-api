import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      minLength: 2,
      maxLength: 100,
    },
    price: {
      type: Number,
      required: [true, "subscription is required"],
      minLength: [0, "Price must be greater than 0"],
    },
    currency: {
      type: String,
      enum: ["USD", "EUR", "GBP"],
      default: "USD",
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
    },
    category: {
      type: String,
      enum: [
        "sports",
        "news",
        "entertainment",
        "lifestyle",
        "technology",
        "finance",
        "politics",
        "other",
      ],
      required: true,
    },
    paymentMethod: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "expire", "canceled"],
      default: "active",
    },
    startDate: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => value <= new Date(),
        message: "Start date cannot be in the future",
      },
    },

    renewalsDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: "renewalsDate must be after startDate",
      },
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

subscriptionSchema.pre("save", function (next) {
  if (!this.renewalsDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };
    this.renewalsDate = new Date(this.startDate);
    this.renewalsDate.setDate(
      this.renewalsDate.getDate() + renewalPeriods[this.frequency]
    );
  }
  if (this.renewalsDate <= this.startDate) {
    this.status = "expire";
  }
  next();
});


const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;