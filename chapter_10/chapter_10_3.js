function getAmount() {
    let result;
    if (isDead)
      result = deadAmount();
    else {
        if (isSeparated)
          result = separatedAmount();
        else {
          if (isRetired)
            result = retiredAmount();
          else
            result = normalPayAmount();
        }
    }
    return result;
}


function getPayAmount() {
    if (isDead) return deadAmount();
    if (isSeparated) return separatedAmount();
    if (isRerired) return retiredAmount();
    return normalPayAmount();
}
