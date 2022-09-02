export const categorize = (data) => {
  let category = {
    pending: 0,
    completed: 0,
    collecting: 0,
    total: 0,
  };
  for (let i = 0; i < data.length; i++) {
    let key = data[i]["status"];
    if (category[key] !== undefined) {
      category[key]++;
      category.total++;
    } else {
      continue;
    }
  }
  let percentage = getPercentage(category);
  category.percentage = percentage;
  return category;
};

function getPercentage(obj) {
  const total = obj.total;
  let to_hundred = 100 / total;
  let pending_pct = obj.pending * to_hundred;
  let completed_pct = obj.completed * to_hundred;
  let collecting_pct = obj.collecting * to_hundred;
  preventOverHundred(pending_pct, completed_pct, collecting_pct);
  return {
    pending: {
      width: pending_pct.toFixed(2) + "%",
    },
    completed: {
      width: completed_pct.toFixed(2) + "%",
      left: pending_pct.toFixed(2) + "%",
    },
    collecting: {
      width: collecting_pct.toFixed(2) + "%",
      left: (pending_pct + completed_pct).toFixed(2) + "%",
    },
  };
}
function preventOverHundred(pending, completed, collecting) {
  let sum = pending + completed + collecting;
  let higestValue = Math.max(pending, completed, collecting);
  if (sum > 100) {
    let diff = sum - 100;
  }
}
